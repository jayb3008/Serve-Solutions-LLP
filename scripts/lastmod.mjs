// Per-route <lastmod> dates for the sitemap.
//
// Every URL used to carry the build date, which meant the sitemap claimed all
// 54 pages changed on every deploy. Google discounts lastmod it cannot trust,
// so a uniform build stamp is worth no more than no stamp at all — and it hides
// the pages that genuinely did change.
//
// Two sources of truth, in order of preference:
//
//   1. The content's own date, where the data carries one. Blog posts publish a
//      month and record an `updated` month when they are materially revised.
//   2. The last commit touching the files that render the route. This is the
//      honest answer for pages whose copy lives in a component or a shared data
//      file: if nothing committed against them, nothing changed.
//
// If neither is available the date is omitted. `lastmod` is optional in the
// sitemap spec, and saying nothing beats asserting something false.

import { spawnSync } from 'node:child_process';

const PAGES = 'src/pages';
const DATA = 'src/data';

/* Routes whose content lives in one hand-authored page component. */
const PAGE_SOURCES = {
  '/': [`${PAGES}/Home.tsx`],
  '/about': [`${PAGES}/About.tsx`],
  '/services': [`${PAGES}/Services.tsx`, `${DATA}/services.ts`],
  '/services/product-design': [`${PAGES}/ProductDesign.tsx`],
  '/services/web-engineering': [`${PAGES}/WebEngineering.tsx`],
  '/services/mobile': [`${PAGES}/MobileApps.tsx`],
  '/services/ai-ml': [`${PAGES}/AiMl.tsx`],
  '/services/brand': [`${PAGES}/Brand.tsx`],
  '/services/graphic-design': [`${PAGES}/GraphicDesign.tsx`],
  '/industries': [`${PAGES}/Industries.tsx`, `${DATA}/industries.ts`],
  '/portfolio': [`${PAGES}/Portfolio.tsx`],
  '/blog': [`${PAGES}/Blog.tsx`, `${DATA}/blog.ts`],
  '/hire': [`${PAGES}/Hire.tsx`],
  '/careers': [`${PAGES}/Careers.tsx`],
  '/contact': [`${PAGES}/Contact.tsx`],

  // Direct SEO service paths that render a bespoke component rather than
  // ServiceDetail — these mirror the element bindings in src/App.tsx.
  '/web-development': [`${PAGES}/WebEngineering.tsx`],
  '/mobile-app-development': [`${PAGES}/MobileApps.tsx`],
  '/ai-development': [`${PAGES}/AiMl.tsx`],
  '/ui-ux-design': [`${PAGES}/ProductDesign.tsx`],
  '/graphic-design-branding': [`${PAGES}/GraphicDesign.tsx`],
};

/* Everything else is data-driven: the route is one component plus the data file
   it reads. Pages in the same family legitimately share a date — they are the
   same template over the same data, so they do change together. */
const SERVICE_SOURCES = [`${PAGES}/ServiceDetail.tsx`, `${DATA}/services.ts`];
const INDUSTRY_SOURCES = [`${PAGES}/IndustryDetail.tsx`, `${DATA}/industries.ts`];
const LOCATION_SOURCES = [`${PAGES}/LocationLanding.tsx`, `${DATA}/locations.ts`];
const PROJECT_SOURCES = [`${PAGES}/ProjectDetail.tsx`];

const LOCATION_ROUTES = new Set([
  '/software-development-company-anand',
  '/it-company-anand',
  '/mobile-app-development-gujarat',
  '/ai-development-services-india',
]);

const INDUSTRY_SEO_ROUTES = new Set([
  '/healthcare-software-development',
  '/fintech-software-development',
  '/education-software-development',
  '/logistics-software-development',
  '/restaurant-pos-development',
  '/jewelry-ecommerce-development',
]);

const MONTHS = {
  Jan: '01', Feb: '02', Mar: '03', Apr: '04', May: '05', Jun: '06',
  Jul: '07', Aug: '08', Sep: '09', Oct: '10', Nov: '11', Dec: '12',
};

/** "Jul 2026" -> "2026-07-01". Mirrors toISO in src/pages/BlogPost.tsx. */
function monthToISO(value) {
  const [mon, year] = String(value).split(' ');
  if (!MONTHS[mon] || !/^\d{4}$/.test(year ?? '')) return null;
  return `${year}-${MONTHS[mon]}-01`;
}

const gitCache = new Map();

/** Newest commit date across `files`, as YYYY-MM-DD, or null. */
function gitDate(files) {
  const key = files.join('|');
  if (gitCache.has(key)) return gitCache.get(key);

  // %cs is the committer date in short form; -1 after `--` gives the most
  // recent commit touching any of the paths.
  const res = spawnSync('git', ['log', '-1', '--format=%cs', '--', ...files], {
    encoding: 'utf-8',
  });

  const out = res.status === 0 ? res.stdout.trim() : '';
  const date = /^\d{4}-\d{2}-\d{2}$/.test(out) ? out : null;
  gitCache.set(key, date);
  return date;
}

function sourcesFor(route) {
  if (PAGE_SOURCES[route]) return PAGE_SOURCES[route];
  if (LOCATION_ROUTES.has(route)) return LOCATION_SOURCES;
  if (INDUSTRY_SEO_ROUTES.has(route)) return INDUSTRY_SOURCES;
  if (route.startsWith('/services/')) return SERVICE_SOURCES;
  if (route.startsWith('/industries/')) return INDUSTRY_SOURCES;
  if (route.startsWith('/portfolio/')) return PROJECT_SOURCES;
  // Remaining direct SEO service paths render <ServiceDetail serviceId=… />.
  return SERVICE_SOURCES;
}

/**
 * Build a `route -> YYYY-MM-DD | null` resolver.
 * `posts` comes from the SSR bundle so blog dates stay in one place.
 */
export function createLastmodResolver(posts = []) {
  const byBlogSlug = new Map(
    posts.map((p) => [p.slug, monthToISO(p.updated ?? p.date)]),
  );

  return function lastmodFor(route) {
    if (route.startsWith('/blog/')) {
      // Every post shares blog.ts, so a git date would flatten all 14 to the
      // same day. The post's own dates are both truer and more granular.
      return byBlogSlug.get(route.slice('/blog/'.length)) ?? null;
    }
    return gitDate(sourcesFor(route));
  };
}
