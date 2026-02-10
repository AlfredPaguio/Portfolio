/* #__PURE__ */
const domain = process.env.APP_URL
  ? new URL(process.env.APP_URL).hostname
  : process.env.$CF_PAGES_URL ||
    `${process.env.HOST || "localhost"}:${process.env.PORT || 4321}`;

/* #__PURE__ */
const protocol =
  domain.includes("localhost") || domain.startsWith("127.") ? "http" : "https";

/* #__PURE__ */
const url = `${protocol}://${domain}`;

/* #__PURE__ */
const siteConfig = {
  name: "Alfred's Portfolio",
  description:
    "Welcome to Alfred's portfolio! This portfolio showcases my skills and projects",
  email: "alfredpaguio36@gmail.com",
  domain,
  url,
  links: {
    repository: "https://github.com/AlfredPaguio/Portfolio",
    socials: {
      linkedin: "https://www.linkedin.com/in/alfredpaguio",
      github: "https://github.com/AlfredPaguio/",
    },
  },
  keywords: ["Astro", "TypeScript", "Portfolio"],
};

/* #__PURE__ */
type SiteConfig = typeof siteConfig;

export { siteConfig };
export type { SiteConfig };
