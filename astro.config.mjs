import { defineConfig } from "astro/config";
import path from "path";
import sitemap from "@astrojs/sitemap";
import svelte from "@astrojs/svelte";
import prefetch from "@astrojs/prefetch";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://pros-rs.pages.app/",
  integrations: [sitemap(), svelte(), prefetch()],
  output: "hybrid",
  vite: {
    build: {
      sourcemap: true
    },
    resolve: {
      alias: {
        "~": path.resolve("./src")
      }
    }
  },
  adapter: cloudflare()
});