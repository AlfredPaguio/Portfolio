import type { APIRoute } from "astro";

export const prerender = true;
export const GET: APIRoute = ({ site }) => new Response([
  "# Alfred U. Paguio",
  "> Junior Software Developer in the Philippines, working mainly with Laravel and React.",
  "## Portfolio",
  `- [Full portfolio in Markdown](${new URL("/llms-full.txt", site)}): Profile, contact links, technologies, and all project descriptions.`,
  `- [Projects](${new URL("/projects/", site)}): Project pages and supporting media.`,
  "The PDF resume is linked in the full export; its contents are not included. Treat missing information as unknown.",
].join("\n\n") + "\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } });
