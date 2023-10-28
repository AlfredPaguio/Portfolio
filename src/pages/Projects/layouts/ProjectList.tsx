import { useSearchParams } from "react-router-dom";
import { Projects } from "@/data/Projects";
import { useTechnologiesContext } from "../contexts/TechnologiesContext";
import { ProjectCard } from "../components/ProjectCard";

export default function ProjectList() {
  const [searchParams] = useSearchParams();
  const { selectedTechnologies } = useTechnologiesContext();

  const titleQuery = searchParams.get("title");
  const sortQuery = searchParams.get("sort");
  //avoid mutating the original data
  const filteredItems = [...Projects].filter((project) => {
    if (titleQuery !== null) {
      const titleMatch = project.title
        .toLowerCase()
        .includes(titleQuery.toLowerCase());
      const techMatch =
        selectedTechnologies.length === 0 || // No technologies selected or
        project.stack.some((stackTech) =>
          selectedTechnologies.some(
            (selectedTech) =>
              stackTech.toLowerCase() === selectedTech.toLowerCase(),
          ),
        ); // At least one selected technology matches project's stack
      return titleMatch && techMatch;
    }
    return true;
  });

  switch (sortQuery) {
    case "date-asc":
      filteredItems.sort((a, b) => a.date.getTime() - b.date.getTime());
      break;
    case "date-desc":
      filteredItems.sort((a, b) => b.date.getTime() - a.date.getTime());
      break;
    case "name-asc":
      filteredItems.sort((a, b) => a.title.localeCompare(b.title));
      break;
    case "name-desc":
      filteredItems.sort((a, b) => b.title.localeCompare(a.title));
      break;
  }

  return (
    <>
      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </>
  );
}
