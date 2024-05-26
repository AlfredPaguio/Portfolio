import createMdxPlugin from "@next/mdx";
import withFrontmatter from "remark-frontmatter";
import withMdxFrontmatter from "remark-mdx-frontmatter";
import withGfm from "remark-gfm";
import withTypographicQuotes from "remark-smartypants";
import withSyntaxHighlighter from "@shikijs/rehype";
import withHeadingIds from "rehype-slug";

/** @typedef {import('next').NextConfig} NextConfig */

/** @type {NextConfig} */
const config = {};

/** @type {Array<(config: NextConfig) => NextConfig>} */
const plugins = [
  createMdxPlugin({
    options: {
      remarkPlugins: [
        withFrontmatter,
        withMdxFrontmatter,
        withGfm,
        withTypographicQuotes,
      ],
      rehypePlugins: [
        withHeadingIds,
        [
          withSyntaxHighlighter,
          { themes: { light: "github-light", dark: "github-dark" } },
        ],
      ],
    },
  }),
];

export default plugins.reduce((config, plugin) => {
  return plugin(config);
}, config);
