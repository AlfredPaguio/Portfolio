// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";

import { satteri } from "@astrojs/markdown-satteri";
import mdx from "@astrojs/mdx";
import { mdastReadingTimePlugin } from "@/lib/mdast-reading-time";

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
    processor: satteri({
      // @ts-ignore
      mdastPlugins: [mdastReadingTimePlugin],
    }),
  },

  integrations: [
    mdx({
      // @ts-ignore
      extendMarkdownConfig: true,
      // remarkPlugins: [mdastReadingTimePlugin],
    }),
  ],

  experimental: {
    contentIntellisense: true,
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Geist",
      cssVariable: "--font-geist-sans",
    },
    {
      provider: fontProviders.fontsource(),
      name: "Geist Mono",
      cssVariable: "--font-geist-mono",
    },
  ],
});
