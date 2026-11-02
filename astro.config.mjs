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
    {
      provider: fontProviders.fontsource(),
      name: "Noto Sans JP",
      cssVariable: "--font-noto-sans-jp",
    },
  ],
});
