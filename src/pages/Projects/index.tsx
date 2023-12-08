import { TechnologiesProvider } from "./contexts/TechnologiesContext";
import ProjectList from "./layouts/ProjectList";
import FilterListBar from "./layouts/FilterListBar";
import SearchBarAndSorter from "./layouts/SearchBarAndSorter";

function Projects() {
  return (
    <div className="flex flex-col items-center gap-6 px-16">
      <TechnologiesProvider>
        <SearchBarAndSorter />
        <FilterListBar />
        <ProjectList />
      </TechnologiesProvider>
    </div>
  );
}

export default Projects;
