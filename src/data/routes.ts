import { servicesData } from './services';
import { industriesData } from './industries';
import { blogSlugs } from './blog';

/**
 * Single source of truth for every crawlable URL on the site.
 * Used by the prerender script (static HTML generation) and the
 * sitemap generator so the two can never drift apart.
 */

/* Portfolio case-study slugs (mirrors the keys in ProjectDetail.tsx) */
export const portfolioSlugs = [
  'nine-finance',
  'glamour-jewelry',
  'charotar-soap',
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
  '/hire',
  '/careers',
  '/contact',

  // SEO Direct Service Paths
  '/web-development',
  '/mobile-app-development',
  '/ai-development',
  '/ui-ux-design',
  '/devops-services',
  '/cybersecurity-services',
  '/data-engineering',
  '/ecommerce-development',
  '/iot-development',
  '/qa-testing',
  '/marketing-services',
  '/blockchain-development',
  '/graphic-design-branding',

  // Location SEO Pages
  '/software-development-company-anand',
  '/it-company-anand',
  '/mobile-app-development-gujarat',
  '/web-development-company-ahmedabad',
  '/ai-development-services-india',

  // SEO Direct Industry Paths — these mirror routes declared in App.tsx.
  // They must be listed here or they never get prerendered, and the SPA
  // fallback serves them the homepage HTML instead.
  '/healthcare-software-development',
  '/fintech-software-development',
  '/education-software-development',
  '/logistics-software-development',
  '/restaurant-pos-development',
  '/jewelry-ecommerce-development',
];

/* Per-route crawl hints for the sitemap */
export const routeMeta: Record<string, { changefreq: string; priority: number }> = {
  '/': { changefreq: 'weekly', priority: 1.0 },
  '/about': { changefreq: 'monthly', priority: 0.8 },
  '/services': { changefreq: 'monthly', priority: 0.9 },
  '/industries': { changefreq: 'monthly', priority: 0.9 },
  '/portfolio': { changefreq: 'monthly', priority: 0.85 },
  '/blog': { changefreq: 'weekly', priority: 0.7 },
  '/hire': { changefreq: 'monthly', priority: 0.85 },
  '/careers': { changefreq: 'weekly', priority: 0.7 },
  '/contact': { changefreq: 'monthly', priority: 0.8 },
};

function metaFor(route: string): { changefreq: string; priority: number } {
  if (routeMeta[route]) return routeMeta[route];
  if (
    [
      '/web-development',
      '/mobile-app-development',
      '/ai-development',
      '/ui-ux-design',
      '/devops-services',
      '/cybersecurity-services',
      '/data-engineering',
      '/ecommerce-development',
      '/iot-development',
      '/qa-testing',
      '/marketing-services',
      '/blockchain-development',
      '/graphic-design-branding'
    ].includes(route)
  ) {
    return { changefreq: 'monthly', priority: 0.9 };
  }
  if (
    [
      '/software-development-company-anand',
      '/it-company-anand',
      '/mobile-app-development-gujarat',
      '/web-development-company-ahmedabad',
      '/ai-development-services-india'
    ].includes(route)
  ) {
    return { changefreq: 'weekly', priority: 0.85 };
  }
  if (
    [
      '/healthcare-software-development',
      '/fintech-software-development',
      '/education-software-development',
      '/logistics-software-development',
      '/restaurant-pos-development',
      '/jewelry-ecommerce-development'
    ].includes(route)
  ) {
    return { changefreq: 'monthly', priority: 0.85 };
  }
  if (route.startsWith('/services/')) return { changefreq: 'monthly', priority: 0.8 };
  if (route.startsWith('/industries/')) return { changefreq: 'monthly', priority: 0.75 };
  if (route.startsWith('/portfolio/')) return { changefreq: 'yearly', priority: 0.7 };
  if (route.startsWith('/blog/')) return { changefreq: 'monthly', priority: 0.65 };
  return { changefreq: 'monthly', priority: 0.7 };
}

/* Industry keys that also have a direct SEO landing path. That path is the
   canonical home for the vertical; `/industries/<key>` 301s to it.
   Must stay in sync with getSeoPath() in src/pages/IndustryDetail.tsx. */
export const industrySeoPaths: Record<string, string> = {
  healthcare: '/healthcare-software-development',
  finance: '/fintech-software-development',
  education: '/education-software-development',
  logistics: '/logistics-software-development',
  'on-demand': '/restaurant-pos-development',
  retail: '/jewelry-ecommerce-development',
};

/* Verticals consolidated away from the site.
   The 17-page industry cluster averaged 58% pairwise text duplication and
   ~200 unique words per page — it read as one template filled 17 times and
   failed the content-uniqueness gate. These nine carried no case study and no
   SEO landing path, so they 301 to /industries rather than competing with the
   verticals we can actually evidence.
   Their entries stay in industriesData: nothing references them now, but
   keeping the copy makes reinstating one a data change rather than a rewrite. */
export const retiredIndustries = [
  'social-media',
  'insurance',
  'travel',
  'it-telecom',
  'construction',
  'beauty-lifestyle',
  'sports',
  'marketplace',
];

/* Industry keys the site still routes to and links from. */
export const activeIndustryKeys = (): string[] =>
  Object.keys(industriesData).filter((k) => !retiredIndustries.includes(k));

/* The one canonical URL for a vertical. Nav and hub links must use this, or
   they point at a URL that immediately redirects. */
export const industryPath = (key: string): string =>
  industrySeoPaths[key] ?? `/industries/${key}`;

/* The full list of routes to statically render (deduped — some service
   keys, e.g. "ai-ml", also have a hand-built landing page route).
   `/industries/<key>` is rendered only when the vertical is active and has no
   SEO landing path of its own; everything else is served by a redirect. */
export const allRoutes: string[] = [
  ...new Set([
    ...staticRoutes,
    ...Object.keys(servicesData).map((k) => `/services/${k}`),
    ...activeIndustryKeys()
      .filter((k) => !industrySeoPaths[k])
      .map((k) => `/industries/${k}`),
    ...portfolioSlugs.map((s) => `/portfolio/${s}`),
    ...blogSlugs.map((s) => `/blog/${s}`),
  ]),
];

/* Redirects for consolidated / duplicated industry URLs, consumed by
   scripts/prerender.mjs to keep vercel.json in sync with the data. */
export const industryRedirects = (): { source: string; destination: string }[] => [
  ...Object.entries(industrySeoPaths).map(([k, dest]) => ({
    source: `/industries/${k}`,
    destination: dest,
  })),
  ...retiredIndustries.map((k) => ({
    source: `/industries/${k}`,
    destination: '/industries',
  })),
];

/* Build the sitemap entries (route + crawl hints) */
export function sitemapEntries(): { loc: string; changefreq: string; priority: number }[] {
  // Exclude legacy/duplicate service paths from the sitemap to prevent crawl budget waste
  // and duplicate content flags. Prerendering still builds them for backward compatibility.
  // (Duplicate industry paths need no entry here — allRoutes already omits them,
  // and they are served as redirects rather than pages.)
  const duplicatesToExclude = [
    '/services/web-engineering',
    '/services/mobile',
    '/services/ai-ml',
    '/services/product-design',
    '/services/graphic-design',
    ...Object.keys(servicesData)
      .map((k) => {
        const s = servicesData[k];
        return s && s.seoPath ? `/services/${k}` : null;
      })
      .filter(Boolean) as string[]
  ];

  return allRoutes
    .filter((route) => !duplicatesToExclude.includes(route))
    .map((route) => ({ loc: route, ...metaFor(route) }));
}
