import { parseAsString, useQueryState } from "nuqs";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect, useMemo } from "react";
import { ProjectType, Projects } from "../data/Projects";
import { batchAddTechnologies } from "../features/technology/technology-slice";
import { setCurrentItems } from "../features/project/project-slice";

export default function ProjectsHandler() {
  const selectedTechnologies = useAppSelector(
    (state) => state.technology.selectedTechnologies
  );
  const dispatch = useAppDispatch();
  const [techQuery, setTechQuery] = useQueryState("q", {
    history: "replace",
    shallow: false,
  });
  const [titleQuery, setTitleQuery] = useQueryState("title", {
    history: "replace",
    shallow: false,
  });
  const [sortQuery] = useQueryState(
    "sort",
    parseAsString
      .withDefault("date-desc")
      .withOptions({ history: "replace", shallow: false })
  );

  useEffect(() => {
    if (techQuery) {
      const techs = techQuery.split(",");
      dispatch(batchAddTechnologies(techs));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (titleQuery == "" || !titleQuery) {
      setTitleQuery(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    //why the hell if (selectedTechnologies) is truthy even empty?
    if (selectedTechnologies.length > 0) {
      setTechQuery(selectedTechnologies.join(","));
    } else {
      setTechQuery(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTechnologies]);

  useEffect(() => {
    const filteredProjects = filterProjects(
      [...Projects],
      selectedTechnologies,
      titleQuery
    );
    const sortedProjects = sortProjects(filteredProjects, sortQuery);

    dispatch(setCurrentItems(sortedProjects));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTechnologies, sortQuery, titleQuery]);

  return null;
}

function filterProjects(
  projects: ProjectType[],
  selectedTechnologies: string[],
  titleQuery: string | null
): ProjectType[] {
  return projects.filter((project) => {
    const titleMatch = titleQuery
      ? project.title.toLowerCase().includes(titleQuery.toLowerCase())
      : true;
    const techMatch =
      selectedTechnologies.length === 0 ||
      project.stack.some((stackTech) =>
        selectedTechnologies.some(
          (selectedTech) =>
            stackTech.toLowerCase() === selectedTech.toLowerCase()
        )
      );
    return titleMatch && techMatch;
  });
}

function sortProjects(
  projects: ProjectType[],
  sortQuery: string | null
): ProjectType[] {
  if (sortQuery) {
    switch (sortQuery) {
      case "date-asc":
        projects.sort((a, b) => a.date.getTime() - b.date.getTime());
        break;
      case "date-desc":
        projects.sort((a, b) => b.date.getTime() - a.date.getTime());
        break;
      case "name-asc":
        projects.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        projects.sort((a, b) => b.title.localeCompare(a.title));
        break;
      default:
        break;
    }
  }
  return projects;
}
