import { Projects } from "@/data/Projects";
import { ProjectCard } from "@/pages/Projects/components/projectCard";
import { Link } from "react-router-dom";
import Lead from "@/components/Lead";

export default function ProjectsSection() {
  const latestProjects = Projects.slice(0, 2);

  return (
    <section id="section">
      <div className="relative flex h-fit w-full flex-col items-center gap-8 bg-transparent px-2 pt-8">
        <div className="flex flex-col items-center bg-transparent">
          <Lead>Projects</Lead>
          <p className="text-center text-lg font-normal text-gray-300">
            Take a look at what I’ve created.
          </p>
        </div>
        <div className="m-4 flex flex-wrap justify-center gap-y-4 p-4">
          {latestProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
        <Link
          className="pb-4 text-center text-xl font-bold text-white underline decoration-accent decoration-2 underline-offset-8 hover:underline"
          to="/projects"
        >
          See all projects.
        </Link>
      </div>
    </section>
  );
}
