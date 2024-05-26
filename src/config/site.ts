/* #__PURE__ */
const domain = process.env.APP_URL
  ? new URL(process.env.APP_URL).hostname
  : process.env.NEXT_PUBLIC_VERCEL_URL ||
    `${process.env.HOST || "localhost"}:${process.env.PORT || 3000}`;

/* #__PURE__ */
const protocol =
  domain === "localhost" || domain.startsWith("127.") ? "http" : "https";

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
    github: "https://github.com/AlfredPaguio/Portfolio",
  },
  keywords: [
    "Next.js",
    "React",
    "TypeScript",
    "Shadcn/ui",
    "Keystatic",
    "Portfolio",
  ],
};

/* #__PURE__ */
type SiteConfig = typeof siteConfig;

export { siteConfig };
export type { SiteConfig };