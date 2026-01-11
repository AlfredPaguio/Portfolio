import { glob } from "astro/loaders";
import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { REPO_OWNER, REPOSITORIES } from "./data/Repositories";
import { myGithubLoader } from "./lib/githubLoader";

const projects = defineCollection({
  loader: myGithubLoader({
    username: REPO_OWNER,
    repository: REPOSITORIES.PortfolioContents,
    includePaths: ["content/projects/"],
  }),
});

// "Now" page
const now = defineCollection({
  loader: glob({ pattern: "index.md", base: "./src/content/now" }),
  schema: z.object({
    updated: z.date(),
  }),
});

export const collections = {
  projects,
  now,
};
