import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

/**
 * Serve the prerendered tree under `vite preview` the way Vercel serves it.
 *
 * preview defaults to SPA history fallback, so every extensionless URL was
 * answered with dist/index.html — the prerendered HOME page — rather than that
 * route's own dist/<route>/index.html. The client then hydrated the correct
 * route on top of the wrong markup, so React threw #418 (text mismatch) and
 * #423 (bail out to client rendering) on every page and discarded the
 * prerendered DOM wholesale.
 *
 * Nothing was wrong with the app: vercel.json declares no `rewrites`, so
 * production resolves /about to dist/about/index.html and hydrates cleanly.
 * The bug was that preview could not see it — which made preview useless for
 * checking the prerender pipeline, the one load-bearing thing it exists to
 * check here. A broken pipeline and a healthy one looked identical locally.
 *
 * Resolve directory indexes like Vercel, and 404 on anything not prerendered
 * instead of quietly serving the SPA shell with a 200.
 */
function servePrerendered(): Plugin {
  return {
    name: 'serve-prerendered',
    // Registering inside the hook (rather than returning a post-hook function)
    // puts this ahead of Vite's static + history-fallback middlewares.
    configurePreviewServer(server) {
      const outDir = path.resolve(server.config.root, server.config.build.outDir);

      server.middlewares.use((req, res, next) => {
        const url = req.url ?? '/';
        const pathname = url.split('?')[0];

        // Assets carry an extension and are already handled correctly.
        if (path.extname(pathname)) return next();

        const clean = pathname.replace(/\/+$/, '');
        if (fs.existsSync(path.join(outDir, clean, 'index.html'))) {
          req.url = `${clean}/index.html${url.slice(pathname.length)}`;
          return next();
        }

        const notFound = path.join(outDir, '404.html');
        if (fs.existsSync(notFound)) {
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          return res.end(fs.readFileSync(notFound));
        }
        return next();
      });
    },
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), servePrerendered()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Bundle all deps into the SSR/prerender output so Node can load it as a
  // self-contained ESM module (avoids CommonJS named-import interop errors,
  // e.g. react-helmet-async). The SSR bundle is deleted after prerendering.
  ssr: {
    noExternal: true,
  },
});
