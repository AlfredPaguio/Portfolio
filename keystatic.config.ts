import { REPOSITORIES, REPO_OWNER } from "@/data/Repositories";
import { GitHubConfig, LocalConfig, config } from "@keystatic/core";
import { projectsSchema } from "./schema/projects";
import { techStackSchema } from "./schema/techStack";
import { linksSchema } from "./schema/links";
import { aboutSchema } from "./schema/about";
import { siteConfig } from "@/config/site";

//https://vercel.com/docs/projects/environment-variables/system-environment-variables
const isProd = process.env.NEXT_PUBLIC_VERCEL_ENV === "production" || false;
const storage: LocalConfig["storage"] | GitHubConfig["storage"] = isProd
  ? {
      kind: "github",
      repo: {
        owner: process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_OWNER || REPO_OWNER,
        name:
          process.env.NEXT_PUBLIC_VERCEL_GIT_REPO_SLUG ||
          REPOSITORIES.PortfolioData,
      },
    }
  : { kind: "local" };

export default config({
  storage,
  ui: {
    brand: { name: siteConfig.name },
    navigation: {
      Content: ["projects"],
      Settings: ["about", "techStack", "links"],
    },
  },
  collections: {
    projects: projectsSchema,
  },

  singletons: {
    techStack: techStackSchema,
    about: aboutSchema,
    links: linksSchema,
  },
});
