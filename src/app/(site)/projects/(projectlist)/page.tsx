import SearchBarAndSorter from "@/app/(site)/projects/components/SearchBarAndSorter";
import { fetchProjectContent } from "@/data/fetchContent";
import { Metadata } from "next";
import ProjectList from "./partials/ProjectList";
import FilterListBar from "../components/FilterListBar";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of projects and see what I've been working on.",
};

export default async function Home() {
  const { projects } = await fetchProjectContent();
  // const techs = await fetchTechStack();
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-center text-4xl font-bold">Projects</h1>
      <div className="space-y-6">
        <SearchBarAndSorter />
        <FilterListBar projects={projects.map(project => project.entry)} />
        {/* <PleaseWork projects={projects.map((project) => project.entry)} /> */}

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects && <ProjectList projects={projects} />}
        </div>
      </div>
    </div>
  );
}
