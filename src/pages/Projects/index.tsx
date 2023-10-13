import projectsData from "./data/projectsData";
import { ProjectCard } from "./components/projectCard";


export default function Projects() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 my-5">
      {projectsData.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
}
