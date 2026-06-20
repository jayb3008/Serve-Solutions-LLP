import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
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
