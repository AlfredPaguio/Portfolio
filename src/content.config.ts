import { file, glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";

const projects = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
  schema: z.object({
    title: z.string(),
    slug: z.string().optional(),
    featured: z.boolean().default(false),
    summary: z.string().optional(),
    date: z.date().optional(),
    status: z
      .enum(["active", "maintenance", "archived", "unknown"])
      .default("unknown"),
    stack: z.array(z.string()).default([]),
    links: z
      .array(
        z.object({
          label: z.string(),
          type: z
            .enum(["source", "demo", "docs", "social", "other"])
            .default("other"),
          url: z.string().url(),
        })
      )
      .default([]),
    images: z
      .array(
        z.object({
          src: z.string(),
          alt: z.string().optional(),
        })
      )
      .default([]),
    videos: z.array(z.string().url()).default([]),
  }),
});

const techs = defineCollection({
  loader: glob({ pattern: "**/[^_]*.mdx", base: "./src/content/techs" }),
  schema: z.object({
    name: z.string(),
    href: z.string().url(),
    version: z.string().or(z.number()).optional(),
  }),
});

export const collections = {
  projects,
  techs,
};
