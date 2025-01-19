import { fetchProjectContent } from "@/data/fetchContent";
import { BentoFeaturedProjects } from "./BentoFeaturedProjects";

async function getFeaturedProjects() {
  const { projects } = await fetchProjectContent();
  return projects
    .filter((project) => project.entry.featured)
    .sort(
      (a, b) =>
        (b.entry.date ? new Date(b.entry.date).getTime() : 0) -
        (a.entry.date ? new Date(a.entry.date).getTime() : 0),
    )
    .slice(0, 4);
}

export default async function FeaturedProjects() {
  const featuredProjects = await getFeaturedProjects();

  return <BentoFeaturedProjects projects={featuredProjects} />;
}
