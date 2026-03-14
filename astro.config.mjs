// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";
import compress from "vite-plugin-compression";

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
    plugins: [
      tailwindcss(),
      compress({
        algorithm: "brotliCompress",
        deleteOriginFile: false,
      }),
      compress({
        algorithm: "gzip",
        deleteOriginFile: false,
        ext: ".gz",
      }),
    ],
    server: {
      host: true,
      allowedHosts: true,
    },
    build: {
      minify: "terser",
      cssMinify: "esbuild",
      terserOptions: {
        compress: {
          drop_console: true,
        },
      },
      rollupOptions: {
        treeshake: true,
      },
    },
  },
});
