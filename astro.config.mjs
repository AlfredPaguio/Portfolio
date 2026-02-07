// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import mdx from "@astrojs/mdx";
import { remarkReadingTime } from "./src/lib/remark-reading-time.mjs";

// https://astro.build/config
export default defineConfig({
  site: "https://alfredpaguio.pages.dev/",
  devToolbar: {
    enabled: false,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    remarkPlugins: [remarkReadingTime],
  },

  integrations: [mdx()],
});
