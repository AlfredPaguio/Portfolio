import Lead from "@/components/Lead";
import withPageTransition from "@/routes/components/withPageTransition";
import TechnologiesProvider from "./contexts/TechnologiesContext";
import ProjectList from "./layouts/ProjectList";

function Projects() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Lead title="Projects" subtitle="Take a look at what I’ve worked on." />

      <TechnologiesProvider>
        <ProjectList />
      </TechnologiesProvider>
    </div>
  );
}

export default withPageTransition(Projects);
