import { Projects } from "@/data/Projects";
import { Link } from "react-router-dom";
import Lead from "@/components/Lead";
import { Button } from "@/components/ui/button";
import CompactProjectCard from "@/pages/Projects/components/CompactProjectCard";

export default function ProjectsSection() {
  const latestProjects = [...Projects]
    .sort((a, b) => b.date.getTime() - a.date.getTime())
    .slice(0, 2);

  return (
    <section id="section">
      <div className="relative flex h-fit w-full flex-col items-center gap-4 px-2 pt-8">
        <Lead title="Recent Projects" subtitle="Check out my recent works." />
        <div className="m-4 flex flex-col justify-center gap-y-4 p-4">
          {latestProjects.map((project, index) => (
            <CompactProjectCard key={index} project={project} />
          ))}
        </div>
        <Button
          variant={"link"}
          className="mb-4 text-center text-xl font-bold decoration-accent decoration-2 underline-offset-8 transition-all duration-300 ease-in"
          asChild
        >
          <Link to="/projects">See all projects.</Link>
        </Button>
      </div>
    </section>
  );
}
