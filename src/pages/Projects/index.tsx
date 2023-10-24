import { ProjectCard } from "./components/projectCard";
import { Projects as ProjectsData } from "@/data/Projects";
import withPageTransition from "@/routes/components/withPageTransition";

function Projects() {
  return (
    <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
      {ProjectsData.sort((a, b) => b.date.getTime() - a.date.getTime()).map(
        (project, index) => (
          <ProjectCard key={index} project={project} />
        ),
      )}
    </div>
  );
}

export default withPageTransition(Projects);
