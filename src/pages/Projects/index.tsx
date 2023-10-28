import Lead from "@/components/Lead";
import withPageTransition from "@/routes/components/withPageTransition";
import TechnologiesProvider from "./contexts/TechnologiesContext";
import ProjectList from "./layouts/ProjectList";
import FilterListBar from "./layouts/FilterListBar";
import FilterListMenu from "./layouts/FilterListMenu";
import SearchBarAndSorter from "./layouts/SearchBarAndSorter";

function Projects() {
  return (
    <div className="flex flex-col items-center gap-6">
      <Lead title="Projects" subtitle="Take a look at what I’ve worked on." />

      <TechnologiesProvider>
        <SearchBarAndSorter />
        <FilterListBar>
          <FilterListMenu />
        </FilterListBar>
        <ProjectList />
      </TechnologiesProvider>
    </div>
  );
}

export default withPageTransition(Projects);
