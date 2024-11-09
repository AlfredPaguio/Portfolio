import FilterListBar from "@/components/project/FilterListBar";
import SearchBarAndSorter from "@/components/project/SearchBarAndSorter";
import { fetchProjectContent, fetchTechStack } from "@/data/fetchContent";
import { Metadata } from "next";
import ProjectList from "./partials/ProjectList";

export const metadata: Metadata = {
  title: 'Projects',
  description: "Explore my portfolio of projects and see what I've been working on.",
}

export default async function Home() {
  const processedProjects = await fetchProjectContent();
  const techs = await fetchTechStack();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 text-center">My Projects</h1>
      <div className="space-y-6">
        <SearchBarAndSorter />
        <FilterListBar techs={techs} />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {processedProjects && (
            <ProjectList projects={processedProjects.projects} />
          )}
        </div>
      </div>
    </div>
  );
}
