import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteConfig } from "@/data/site";

export async function GET(context) {
  const projects = await getCollection("projects");
  const sortedDateProjects = projects.sort((a, b) => {
    const dateA = a.data.date ? new Date(a.data.date).getTime() : 0;
    const dateB = b.data.date ? new Date(b.data.date).getTime() : 0;
    return dateB - dateA;
  });

  return rss({
    stylesheet: "/rss/pretty-feed-v3.xsl",
    title: `${siteConfig.name}`,
    description: `${siteConfig.description}`,
    site: context.site,
    // site: siteConfig.url, lol
    items: sortedDateProjects.map((project) => ({
      title: project.data.title,
      pubDate: project.data.date ?? null,
      description: project.data.summary,
      link: `/projects/${project.id}/`,
    })),
  });
}
