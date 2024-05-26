import "server-only";

import { evaluate } from "@mdx-js/mdx";
import * as runtime from "react/jsx-runtime";

import type { ProcessorOptions } from "@mdx-js/mdx";
import withSyntaxHighlighter from "@shikijs/rehype";
// import withFrontmatter from "remark-frontmatter";
import withGfm from "remark-gfm";
// import withMdxFrontmatter from "remark-mdx-frontmatter";
import withTypographicQuotes from "remark-smartypants";
import withHeadingIds from "rehype-slug";

import { useMDXComponents } from "@/mdx-components";

const config: ProcessorOptions = {
  remarkPlugins: [
    // Frontmatter plugins are not necessary when using the keystatic reader,
    // which passes only the mdx body to the mdx processor.
    // withFrontmatter,
    // withMdxFrontmatter,
    withGfm,
    withTypographicQuotes,
  ],
  rehypePlugins: [
    withHeadingIds,
    [
      withSyntaxHighlighter,
      {
        themes: {
          light: "github-light",
          dark: "github-dark",
        },
      },
    ],
  ],
};

export function processMdx(content: string) {
  // @ts-expect-error
  return evaluate(content, { ...runtime, ...config, useMDXComponents });
}
