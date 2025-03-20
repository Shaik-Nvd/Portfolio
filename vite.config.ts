import { defineConfig } from "vite";
import checker from "vite-plugin-checker";

export default defineConfig({
  base: "/Portfolio/",  // ✅ Ensures correct asset paths on GitHub Pages
  plugins: [checker({ typescript: true })],
  build: {
    outDir: "dist",      // ✅ Ensures built files go to "dist/"
    sourcemap: false,
  },
  server: {
    open: true,
    port: 1234,
    host: "localhost",
  },
});
