import { defineConfig, type Plugin } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import type { ServerResponse } from 'http';
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
 * So: resolve directory indexes like Vercel, 308 trailing slashes to match
 * `trailingSlash: false`, and 404 on anything not in dist — route or asset —
 * instead of quietly serving the SPA shell with a 200.
 */
function servePrerendered(): Plugin {
  return {
    name: 'serve-prerendered',
    // Registering inside the hook (rather than returning a post-hook function)
    // puts this ahead of Vite's static + history-fallback middlewares.
    configurePreviewServer(server) {
      const outDir = path.resolve(server.config.root, server.config.build.outDir);

      /* Resolve a URL path against dist and confirm the result stayed there.
         path.resolve() normalises `..` away, so without the containment check
         a request can walk out of the output dir — `GET /..` used to answer
         with the repo's own index.html, the unbuilt SPA shell, which is
         exactly the confusion this middleware exists to remove. Decode for the
         lookup, since Vercel matches routes on the decoded path. */
      const inOutDir = (pathname: string) => {
        let decoded: string;
        try {
          decoded = decodeURIComponent(pathname);
        } catch {
          decoded = pathname;
        }
        const target = path.resolve(outDir, `.${decoded}`);
        return target === outDir || target.startsWith(outDir + path.sep)
          ? target
          : null;
      };

      const send404 = (res: ServerResponse, next: () => void) => {
        const notFound = path.join(outDir, '404.html');
        if (!fs.existsSync(notFound)) return next();
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        return res.end(fs.readFileSync(notFound));
      };

      server.middlewares.use((req, res, next) => {
        const url = req.url ?? '/';
        const pathname = url.split('?')[0];
        const query = url.slice(pathname.length);

        /* Anything with an extension is a file request. Hand the real ones to
           Vite's static middleware, but answer the misses here: left alone,
           they fall through to the history fallback and a mistyped image path
           comes back as the home page with a 200 — the same local-looks-fine,
           production-404s lie this plugin exists to stop. */
        if (path.extname(pathname)) {
          const asset = inOutDir(pathname);
          return asset && fs.existsSync(asset) ? next() : send404(res, next);
        }

        const clean = pathname.replace(/\/+$/, '');

        // vercel.json sets `trailingSlash: false`, so production 308s /about/
        // to /about. Do the same here rather than answering both with a 200 —
        // preview exists to show what production will do.
        if (clean !== pathname && clean !== '') {
          res.statusCode = 308;
          res.setHeader('Location', `${clean}${query}`);
          return res.end();
        }

        /* Rewrite with the raw path, not the decoded one, so whatever escaping
           the client sent survives to the static handler. */
        const dir = inOutDir(clean);
        if (dir && fs.existsSync(path.join(dir, 'index.html'))) {
          req.url = `${clean}/index.html${query}`;
          return next();
        }

        return send404(res, next);
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
