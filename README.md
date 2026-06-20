# Satvix Tech Solutions — Website

Marketing site for **Satvix Tech Solutions**, an independent digital product studio in Anand, Gujarat, India. Built with React + Vite + TypeScript and Tailwind, with **build-time prerendering** for full SEO.

## Scripts

| Command | What it does |
| --- | --- |
| `npm run dev` | Vite dev server (client-side rendering). |
| `npm run build` | Production build **+ static prerender** of every route + sitemap. |
| `npm run build:spa` | Client-only build (no prerender) — for quick checks. |
| `npm run preview` | Serve the built `dist/` locally. |
| `npm run lint` | ESLint. |

## SEO architecture

This is a single-page app, but the production build renders **real static HTML for every route** so crawlers and link-preview bots (Google, Bing, Facebook, LinkedIn, WhatsApp, X) get fully-formed pages — not an empty `<div id="root">`.

How it works:

1. `vite build` produces the client bundle.
2. `vite build --ssr src/entry-server.tsx` produces a server bundle (`render(url)`).
3. `scripts/prerender.mjs` renders every route in `src/data/routes.ts` to
   `dist/<route>/index.html`, injecting the page's `<head>` (title, meta,
   canonical, Open Graph, Twitter, JSON-LD) produced by `react-helmet-async`.
4. The same script regenerates `dist/sitemap.xml` from the route list, so the
   sitemap can never drift from the actual pages.
5. On the client, `src/main.tsx` **hydrates** the prerendered HTML.

### Adding / changing routes

`src/data/routes.ts` is the single source of truth for crawlable URLs. Add a
route there (and a React Router `<Route>` in `src/App.tsx`) and it will be
prerendered and added to the sitemap automatically on the next build.

### Per-page SEO

Every page renders the `<SEO>` component (`src/components/SEO.tsx`), which emits
titles, descriptions, canonicals, Open Graph / Twitter cards and JSON-LD
structured data (Organization, LocalBusiness, WebSite, WebPage, BreadcrumbList,
FAQPage, Service, Article).
