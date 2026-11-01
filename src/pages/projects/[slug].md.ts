import { projectMarkdown } from "@/lib/project-markdown";
import type { APIRoute, GetStaticPaths } from "astro";
import { getCollection } from "astro:content";

export const prerender = true;
export const getStaticPaths: GetStaticPaths = async () =>
  (await getCollection("projects")).map((project) => ({
    params: { slug: project.id },
    props: { project },
  }));
export const GET: APIRoute = ({ props, site }) =>
  new Response(projectMarkdown(props.project, site!), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
