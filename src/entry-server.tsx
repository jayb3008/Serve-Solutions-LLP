import { renderToString } from 'react-dom/server';
import { HelmetProvider, type HelmetServerState } from 'react-helmet-async';
import { StaticRouter } from 'react-router-dom';
import { AppShell } from './App';

export interface RenderResult {
  html: string;
  helmet: HelmetServerState | undefined;
}

/**
 * Render a single route to a static HTML string and capture the
 * <head> tags (title, meta, canonical, Open Graph, JSON-LD, …) that
 * react-helmet-async produced for that route.
 */
export function render(url: string): RenderResult {
  const helmetContext: { helmet?: HelmetServerState } = {};

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <AppShell />
      </StaticRouter>
    </HelmetProvider>
  );

  return { html, helmet: helmetContext.helmet };
}

export { allRoutes, sitemapEntries } from './data/routes';
