// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  compressHTML: true,
  server: {
    host: true,
  },
  // preview: {
  //   host: true
  // },
  vite: {
    plugins: [tailwindcss()],
    server: {
      host: true,
      allowedHosts: true,
    },
    build: {
      minify: "esbuild",
      cssMinify: "esbuild",
      rollupOptions: {
        treeshake: true,
      },
    },
  },
});
