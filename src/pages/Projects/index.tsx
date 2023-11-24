import Lead from "@/components/Lead";
import { TechnologiesProvider } from "./contexts/TechnologiesContext";
import ProjectList from "./layouts/ProjectList";
import FilterListBar from "./layouts/FilterListBar";
import SearchBarAndSorter from "./layouts/SearchBarAndSorter";

function Projects() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Lead title="Projects" subtitle="Take a look at what I’ve worked on." />

      <TechnologiesProvider>
        <SearchBarAndSorter />
        <FilterListBar />
        <ProjectList />
      </TechnologiesProvider>
    </div>
  );
}

export default Projects;
