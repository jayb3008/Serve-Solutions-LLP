// Static prerender step. Runs after `vite build` (client) and
// `vite build --ssr` (server). For every route in the site it renders
// real HTML + per-page <head> tags into dist/<route>/index.html, so
// crawlers and link-preview bots get fully-formed pages without JS.

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, '..');
const distDir = path.join(root, 'dist');
const serverEntry = pathToFileURL(path.join(distDir, 'server', 'entry-server.js')).href;

const BASE_URL = 'https://satvixtech.com';
const TODAY = new Date().toISOString().slice(0, 10);

const { render, allRoutes, sitemapEntries } = await import(serverEntry);

const template = await fs.readFile(path.join(distDir, 'index.html'), 'utf-8');

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

// ── Clean up the intermediate SSR bundle (not needed in the deploy) ──
await fs.rm(path.join(distDir, 'server'), { recursive: true, force: true });

console.log(`✓ Prerendered ${count} routes → static HTML`);
console.log(`✓ Generated sitemap.xml with ${sitemapEntries().length} URLs`);
