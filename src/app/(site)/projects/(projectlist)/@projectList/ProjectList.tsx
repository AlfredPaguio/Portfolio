"use client";
import { useAppSelector } from "@/app/store/hooks";
import CompactProjectCard from "@/components/project/CompactProjectCard";
import keystaticConfig from "@@/keystatic.config";
import { Entry } from "@keystatic/core/reader";
import Link from "next/link";
import { parseAsString, useQueryState } from "nuqs";
import React from "react";

type ProjectType = Entry<(typeof keystaticConfig)["collections"]["projects"]>;
type ProjectTypeWithoutContent = Omit<ProjectType, "content">;

type ProjectListProps = {
  projects: { slug: string; entry: ProjectTypeWithoutContent }[];
};

export default function ProjectList({ projects }: ProjectListProps) {
  const selectedTechnologies = useAppSelector(
    (state) => state.technology.selectedTechnologies,
  );

  const [titleQuery, setTitleQuery] = useQueryState("title", {
    history: "replace",
    shallow: false,
  });
  const [sortQuery] = useQueryState(
    "sort",
    parseAsString
      .withDefault("date-desc")
      .withOptions({ history: "replace", shallow: false }),
  );

  const projectArray = Object.values(projects);

  const filteredProjects = projectArray.filter((project) => {
    const titleMatch = titleQuery
      ? project?.entry.title.toLowerCase().includes(titleQuery.toLowerCase())
      : true;
    const techMatch =
      selectedTechnologies.length === 0 ||
      project?.entry.stack.some((stackTech) =>
        selectedTechnologies.some(
          (selectedTech) =>
            stackTech.toLowerCase() === selectedTech.toLowerCase(),
        ),
      );
    return titleMatch && techMatch;
  });

  if (sortQuery) {
    switch (sortQuery) {
      case "date-asc":
        filteredProjects.sort(
          (a, b) =>
            (a.entry.date ? new Date(a.entry.date).getTime() : 0) -
            (b.entry.date ? new Date(b.entry.date).getTime() : 0),
        );
        break;
      case "date-desc":
        filteredProjects.sort(
          (a, b) =>
            (b.entry.date ? new Date(b.entry.date).getTime() : 0) -
            (a.entry.date ? new Date(a.entry.date).getTime() : 0),
        );
        break;
      case "name-asc":
        filteredProjects.sort((a, b) =>
          a.entry.title.localeCompare(b.entry.title),
        );
        break;
      case "name-desc":
        filteredProjects.sort((a, b) =>
          b.entry.title.localeCompare(a.entry.title),
        );
        break;
      default:
        break;
    }
  }

  return (
    <>
      {filteredProjects.map((project) => (
        <Link href={`/projects/${project?.slug}`} key={project?.slug}>
          <CompactProjectCard key={project?.slug} project={project.entry} />
        </Link>
      ))}
    </>
  );
}
