import projectsData from "@/pages/Projects/data/projectsData";
import { ProjectCard } from "@/pages/Projects/components/projectCard";
import { Link } from "react-router-dom";

export default function ProjectsSection() {
  const latestProjects = projectsData.slice(0, 2);

  return (
    <section id="section">
      <div className="relative flex h-fit w-full flex-col  items-center  gap-16 bg-transparent px-2 pt-40">
        <div className="flex flex-col items-center bg-transparent">
          <h1 className="py-3 text-center text-5xl font-bold text-text">
            Projects
          </h1>
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
          target="_blank"
          className="hidden-object pb-4 text-center text-xl font-bold text-text hover:underline"
          to="/projects"
        >
          See all projects.
        </Link>
      </div>
    </section>
  );
}
