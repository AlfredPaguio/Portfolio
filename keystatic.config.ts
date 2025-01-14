import { siteConfig } from "@/config/site";
import { REPOSITORIES, REPO_OWNER } from "@/data/Repositories";
import {
  CloudConfig,
  GitHubConfig,
  LocalConfig,
  config,
} from "@keystatic/core";
import { aboutSchema } from "./schema/about";
import { linksSchema } from "./schema/links";
import { projectsSchema } from "./schema/projects";
import { techStackSchema } from "./schema/techStack";

//https://vercel.com/docs/projects/environment-variables/system-environment-variables
// const isProd = process.env.NEXT_PUBLIC_VERCEL_ENV === "production" || false;
// const storage: LocalConfig["storage"] | CloudConfig["storage"] = isProd
//   ? {
//       kind: "cloud",
//     }
//   : { kind: "local" };

const storage: LocalConfig["storage"] = { kind: "local" };

export default config({
  storage,
  // cloud: {
  //   project: "alfred-paguio/portfolio",
  // },
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
