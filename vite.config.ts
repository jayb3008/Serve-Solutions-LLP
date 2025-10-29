import { defineConfig } from "vite";
import path from "node:path";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    exclude: ["lucide-react"],
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunks
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "animation-vendor": ["framer-motion", "gsap", "@gsap/react"],
          "icons-vendor": ["lucide-react"],
          // Three.js related
          "three-vendor": ["three", "@react-three/fiber", "@react-three/drei"],
          // UI components
          components: [
            "./src/components/BlurText",
            "./src/components/SplitText",
            "./src/components/Shuffle",
          ],
        },
      },
    },
    chunkSizeWarningLimit: 1000,
  },
});
