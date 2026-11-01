import type { SatteriAstroData } from "@astrojs/markdown-satteri";

declare module "satteri" {
  interface DataMap {
    astro?: SatteriAstroData;
  }
}
