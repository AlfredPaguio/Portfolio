import type { APIRoute } from "astro";
import { portfolioMarkdown } from "@/lib/portfolio-markdown";

export const prerender = true;
export const GET: APIRoute = async ({ site }) => new Response(
  await portfolioMarkdown(site!),
  { headers: { "Content-Type": "text/plain; charset=utf-8" } },
);
