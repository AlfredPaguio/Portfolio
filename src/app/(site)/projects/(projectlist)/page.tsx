import SearchBarAndSorter from "@/app/(site)/projects/components/SearchBarAndSorter";
import { fetchProjectContent } from "@/data/fetchContent";
import { Metadata } from "next";
import { Suspense } from "react";
import FilterListBar from "../components/FilterListBar";
import { ProjectsSkeleton } from "../components/ProjectsSkeleton";
import ProjectList from "./partials/ProjectList";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore my portfolio of projects and see what I've been working on.",
};

export default async function Home() {
  const { projects } = await fetchProjectContent();
  // const techs = await fetchTechStack();
  return (
    <div className="container mx-auto space-y-8 px-4 py-8">
      <h1 className="text-center text-4xl font-bold">My Projects</h1>

      <SearchBarAndSorter />
      <FilterListBar projects={projects.map((project) => project.entry)} />
      {/* <PleaseWork projects={projects.map((project) => project.entry)} /> */}

      <Suspense fallback={<ProjectsSkeleton />}>
        <ProjectList projects={projects} />
      </Suspense>
    </div>
  );
}
