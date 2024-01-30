import { defineCollection, defineConfig, s } from "velite";

const projects = defineCollection({
  name: "Projects", // collection type name
  pattern: "projects/**/*.md", // content files glob pattern
  schema: s
    .object({
      title: s.string().max(99), // Zod primitive type
      slug: s.slug("projects"), // validate format, unique in posts collection
      date: s.isodate(), // input Date-like string, output ISO Date string.
      cover: s.image().optional(), // input image relpath, output image object with blurImage.
      video: s.file().optional(), // input file relpath, output file public path.
      metadata: s.metadata(), // extract markdown reading-time, word-count, etc.
      excerpt: s.excerpt(), // excerpt of markdown content
      content: s.markdown(), // transform markdown to html
    })
    // more additional fields (computed fields)
    .transform((data) => ({ ...data, permalink: `/projects/${data.slug}` })),
});

export default defineConfig({
  collections: { projects },
});
