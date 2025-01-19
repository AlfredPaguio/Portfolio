"use client";
import { useAppSelector } from "@/app/store/hooks";
import { ProjectTypeWithoutContent } from "@/data/fetchContent";
import Link from "next/link";
import { parseAsString, useQueryState } from "nuqs";
import ProjectCard from "../../components/ProjectCard";

type ProjectListProps = {
  projects: { slug: string; entry: ProjectTypeWithoutContent }[];
};

export default function ProjectList({ projects }: ProjectListProps) {
  const selectedTechnologies = useAppSelector(
    (state) => state.technology.selectedTechnologies,
  );

  const [titleQuery] = useQueryState(
    "title",
    parseAsString
      .withOptions({
        history: "replace",
        // throttleMs: 300,
        // shallow: false,
      })
      .withDefault(""),
  );

  const [sortQuery] = useQueryState(
    "sort",
    parseAsString
      .withOptions({
        history: "replace",
        // throttleMs: 300,
        // shallow: false
      })
      .withDefault("date-desc"),
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
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {filteredProjects.map(
        (project: { slug: string; entry: ProjectTypeWithoutContent }) => (
          <Link
            href={`/projects/${project?.slug}`}
            key={project?.slug}
            className="transition-transform hover:scale-105"
          >
            <ProjectCard key={project?.slug} project={project.entry} />
          </Link>
        ),
      )}
    </div>
  );
}
