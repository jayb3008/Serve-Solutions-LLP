import { servicesData } from './services';
import { industriesData } from './industries';

/**
 * Single source of truth for every crawlable URL on the site.
 * Used by the prerender script (static HTML generation) and the
 * sitemap generator so the two can never drift apart.
 */

/* Portfolio case-study slugs (mirrors the keys in ProjectDetail.tsx) */
export const portfolioSlugs = [
  'lendingflow',
  'tailorpro',
  'stillwood',
  'pelican',
  'verbena',
  'nordhavn',
  'aurum',
  'traxis',
  'lumio',
  'vaulter',
];

/* Hand-authored, non-parameterised routes */
export const staticRoutes = [
  '/',
  '/about',
  '/services',
  '/services/product-design',
  '/services/web-engineering',
  '/services/mobile',
  '/services/ai-ml',
  '/services/brand',
  '/industries',
  '/portfolio',
  '/blog',
  '/contact',
];

/* Per-route crawl hints for the sitemap */
export const routeMeta: Record<string, { changefreq: string; priority: number }> = {
  '/': { changefreq: 'weekly', priority: 1.0 },
  '/about': { changefreq: 'monthly', priority: 0.8 },
  '/services': { changefreq: 'monthly', priority: 0.9 },
  '/industries': { changefreq: 'monthly', priority: 0.9 },
  '/portfolio': { changefreq: 'monthly', priority: 0.85 },
  '/blog': { changefreq: 'weekly', priority: 0.7 },
  '/contact': { changefreq: 'monthly', priority: 0.8 },
};

function metaFor(route: string): { changefreq: string; priority: number } {
  if (routeMeta[route]) return routeMeta[route];
  if (route.startsWith('/services/')) return { changefreq: 'monthly', priority: 0.8 };
  if (route.startsWith('/industries/')) return { changefreq: 'monthly', priority: 0.75 };
  if (route.startsWith('/portfolio/')) return { changefreq: 'yearly', priority: 0.7 };
  return { changefreq: 'monthly', priority: 0.7 };
}

/* The full list of routes to statically render (deduped — some service
   keys, e.g. "ai-ml", also have a hand-built landing page route) */
export const allRoutes: string[] = [
  ...new Set([
    ...staticRoutes,
    ...Object.keys(servicesData).map((k) => `/services/${k}`),
    ...Object.keys(industriesData).map((k) => `/industries/${k}`),
    ...portfolioSlugs.map((s) => `/portfolio/${s}`),
  ]),
];

/* Build the sitemap entries (route + crawl hints) */
export function sitemapEntries(): { loc: string; changefreq: string; priority: number }[] {
  return allRoutes.map((route) => ({ loc: route, ...metaFor(route) }));
}
