import { useTechnologiesContext } from "../contexts/TechnologiesContext";
import { ProjectCard } from "../components/ProjectCard";

export default function ProjectList() {
  const { currentItems } = useTechnologiesContext();

  return (
    <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {currentItems.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
