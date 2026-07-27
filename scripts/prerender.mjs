// Static prerender step. Runs after `vite build` (client) and
// `vite build --ssr` (server). For every route in the site it renders
// real HTML + per-page <head> tags into dist/<route>/index.html, so
// crawlers and link-preview bots get fully-formed pages without JS.

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { generateOgImages } from './og-images.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const serverEntry = pathToFileURL(path.join(distDir, 'server', 'entry-server.js')).href;

// Must stay in sync with BASE_URL in src/components/SEO.tsx — this one builds
// the sitemap <loc> values, that one builds canonical/og/JSON-LD URLs.
// The www host is canonical; the apex 308-redirects to it.
const BASE_URL = 'https://www.satvixtech.com';
const TODAY = new Date().toISOString().slice(0, 10);

const { render, allRoutes, sitemapEntries, industryRedirects, posts } =
  await import(serverEntry);

let template = await fs.readFile(path.join(distDir, 'index.html'), 'utf-8');

// ── Preload the above-the-fold font faces ──
// The font CSS is bundled, so the browser only discovers the woff2 files after
// parsing it — late enough that text renders in the fallback first and then
// reflows, which showed up as ~0.10 CLS. Preloading collapses that window.
// Vite fingerprints the filenames, so resolve them from the built assets
// rather than hardcoding. Only the faces used above the fold are worth
// preloading; preloading everything competes for the same bandwidth.
const CRITICAL_FONTS = [/^inter-latin-wght-normal-/, /^instrument-serif-latin-400-normal-/];
const assetFiles = await fs.readdir(path.join(distDir, 'assets'));
const preloadTags = assetFiles
  .filter((f) => f.endsWith('.woff2') && CRITICAL_FONTS.some((re) => re.test(f)))
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`)
  .join('\n    ');

if (preloadTags) {
  template = template.replace('</head>', `  ${preloadTags}\n  </head>`);
  console.log(`✓ Preloading ${preloadTags.split('\n').length} critical font file(s)`);
} else {
  console.warn('! No critical font files matched — check CRITICAL_FONTS patterns');
}

function headFromHelmet(helmet) {
  if (!helmet) return '';
  return [
    helmet.title?.toString(),
    helmet.meta?.toString(),
    helmet.link?.toString(),
    helmet.script?.toString(),
    helmet.noscript?.toString(),
    helmet.style?.toString(),
  ]
    .filter(Boolean)
    .join('\n    ');
}

function outputPathFor(route) {
  if (route === '/') return path.join(distDir, 'index.html');
  return path.join(distDir, route.replace(/^\//, ''), 'index.html');
}

let count = 0;
for (const route of allRoutes) {
  const { html, helmet } = render(route);
  const head = headFromHelmet(helmet);

  const page = template
    .replace('<div id="root"></div>', `<div id="root">${html}</div>`)
    .replace('</head>', `    ${head}\n  </head>`);

  const outPath = outputPathFor(route);
  await fs.mkdir(path.dirname(outPath), { recursive: true });
  await fs.writeFile(outPath, page, 'utf-8');
  count++;
}

// ── Regenerate sitemap.xml so it always matches the rendered routes ──
const urls = sitemapEntries()
  .map(
    ({ loc, changefreq, priority }) => `  <url>
    <loc>${BASE_URL}${loc === '/' ? '/' : loc}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority.toFixed(2)}</priority>
  </url>`
  )
  .join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;
await fs.writeFile(path.join(distDir, 'sitemap.xml'), sitemap, 'utf-8');

// ── Per-post Open Graph cards ──
const ogCount = await generateOgImages(posts);
console.log(`✓ Generated ${ogCount} article OG cards → dist/images/og/`);

// ── Sync consolidated-industry redirects into vercel.json ──
// Generated from the same data that drives the prerender list, so a vertical
// can never be both redirected and rendered. Hand edits to this block are
// overwritten on the next build; change src/data/routes.ts instead.
const vercelPath = path.join(root, 'vercel.json');
const vercelConfig = JSON.parse(await fs.readFile(vercelPath, 'utf-8'));
const generated = industryRedirects().map(({ source, destination }) => ({
  source,
  destination,
  permanent: true,
}));
const handWritten = (vercelConfig.redirects ?? []).filter(
  (r) => !r.source.startsWith('/industries/'),
);
const nextRedirects = [...handWritten, ...generated];

if (JSON.stringify(vercelConfig.redirects ?? []) !== JSON.stringify(nextRedirects)) {
  vercelConfig.redirects = nextRedirects;
  await fs.writeFile(vercelPath, `${JSON.stringify(vercelConfig, null, 2)}\n`, 'utf-8');
  console.log(`✓ Synced ${generated.length} industry redirects → vercel.json`);
} else {
  console.log(`✓ vercel.json redirects already in sync (${generated.length})`);
}

// ── Clean up the intermediate SSR bundle (not needed in the deploy) ──
await fs.rm(path.join(distDir, 'server'), { recursive: true, force: true });

console.log(`✓ Prerendered ${count} routes → static HTML`);
console.log(`✓ Generated sitemap.xml with ${sitemapEntries().length} URLs`);
