# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Marketing site for **Satvix Tech Solutions** (satvixtech.com) — an independent digital product studio in Anand, Gujarat. React + Vite + TypeScript + Tailwind SPA that ships **static prerendered HTML for every route** so crawlers see fully-formed pages.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Vite dev server (CSR, no prerender). |
| `npm run build` | Full production build: client bundle → SSR bundle → prerender every route → sitemap. |
| `npm run build:spa` | Client-only build; skips SSR + prerender (fast sanity check, not deployable). |
| `npm run preview` | Serve `dist/` locally. |
| `npm run lint` | ESLint. |
| `BASE=http://localhost:4173 node scripts/nav.test.mjs` | Manual navbar smoke test. Requires `npm i -D playwright && npx playwright install chromium` and a `preview` server already running. |

There is no test framework; `scripts/nav.test.mjs` is the only automated check and it is a Playwright script run by hand against a built + previewed site.

## Architecture

### SSR / prerender pipeline (this is the load-bearing piece)

The site is a SPA at runtime but every crawlable URL is baked to static HTML at build time. Three moving parts must agree or crawlers will get empty `<div id="root">`:

1. **`src/entry-server.tsx`** — `render(url)` renders `<AppShell>` inside `StaticRouter` + `HelmetProvider` via `renderToString`, returning `{ html, helmet }`. Also re-exports `allRoutes` and `sitemapEntries` from `src/data/routes.ts`.
2. **`src/data/routes.ts`** — single source of truth for crawlable URLs. Combines `staticRoutes` + keys of `servicesData` + keys of `industriesData` + `portfolioSlugs` + `blogSlugs`. `metaFor(route)` assigns changefreq/priority; `sitemapEntries()` excludes duplicate legacy service paths (any service with a `seoPath` gets its `/services/<key>` variant filtered out of the sitemap but still gets prerendered for backward compatibility).
3. **`scripts/prerender.mjs`** — runs after `vite build` + `vite build --ssr`. For each route: calls `render(url)`, injects the returned HTML into `<div id="root">` in `dist/index.html`, appends helmet-produced `<head>` tags, writes to `dist/<route>/index.html`. Then regenerates `dist/sitemap.xml` from `sitemapEntries()` and deletes the intermediate `dist/server/` SSR bundle.

**When adding a new page you must touch three files:**
- Add a `<Route>` in `src/App.tsx` (inside `AnimatedRoutes`).
- Add the path to `staticRoutes` in `src/data/routes.ts` (or add it via one of the parametric data sources: `servicesData`, `industriesData`, `portfolioSlugs`, `blogSlugs`).
- Render `<SEO ...>` at the top of the page component so `react-helmet-async` produces the head.

Miss any of these and the route either won't prerender, won't hydrate, or won't ship SEO tags.

### Hydration behavior

`src/main.tsx` chooses between `hydrateRoot` (when `#root` has children — prerendered route) and `createRoot` (empty `#root` — unknown/SPA-fallback route). This is why Vercel's SPA rewrite in `vercel.json` is safe: unknown URLs load `index.html` and the client mounts fresh.

`AnimatedRoutes` in `App.tsx` uses `initial={false}` on the first render (tracked via `firstRender` ref) so the prerendered HTML stays at full opacity for crawlers — the framer-motion fade only plays on subsequent client-side navigations. Don't change this.

### SEO component

`src/components/SEO.tsx` emits titles, meta, canonical, Open Graph, Twitter cards, and JSON-LD (Organization, LocalBusiness, WebPage, WebSite, BreadcrumbList, FAQPage, Service, Article) through `react-helmet-async`. Title format is `"{page title} — Satvix Tech Solutions"` unless the page title already contains the brand. `BASE_URL` and company constants are hard-coded here — update them here if the domain changes.

### Vite / SSR config

`vite.config.ts` sets `ssr.noExternal: true` so the SSR bundle is fully self-contained ESM (fixes CommonJS named-import interop issues, e.g. `react-helmet-async`). Path alias `@` → `./src`. `lucide-react` is excluded from `optimizeDeps`.

### Styling

Tailwind with shadcn/ui (`new-york` style, `neutral` base color, CSS variables — see `components.json`). Aliases: `@/components`, `@/components/ui`, `@/lib/utils`. Fonts: Instrument Serif (display), Inter (sans), JetBrains Mono. Icons: `lucide-react` only — per `.bolt/prompt` do not install additional icon libraries.

### Routes worth knowing about

- `/services/:id` and `/industries/:id` are catch-alls driven by `servicesData` / `industriesData`.
- Several services have BOTH a `/services/<key>` path AND a direct SEO path (e.g. `/web-development`). Both are prerendered; only the SEO path goes in the sitemap. Services opt in via a `seoPath` field in `servicesData`.
- `LocationLanding` and `IndustryDetail` accept a hardcoded `slug`/`industryId` prop for city/vertical SEO landing pages that share the same component with different data.

### Server directory

`server/` exists but its `routes/`, `middleware/`, and `data/` subfolders are empty — treat it as scaffolding for a future backend, not something the current build depends on.
