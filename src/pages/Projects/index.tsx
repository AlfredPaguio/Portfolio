import Lead from "@/components/Lead";
import { ProjectCard } from "./components/projectCard";
import { Projects as ProjectsData } from "@/data/Projects";
import withPageTransition from "@/routes/components/withPageTransition";

function Projects() {
  return (
    <div className="flex flex-col items-center gap-4">
      <Lead
        title="Projects"
        subtitle="Take a look at what I’ve worked on."
      />

      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {ProjectsData.sort((a, b) => b.date.getTime() - a.date.getTime()).map(
          (project, index) => (
            <ProjectCard key={index} project={project} />
          ),
        )}
      </div>
    </div>
  );
}

export default withPageTransition(Projects);
