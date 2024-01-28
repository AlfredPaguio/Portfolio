import { TechnologiesProvider } from "./contexts/TechnologiesContext";
import ProjectList from "./layouts/ProjectList";
import FilterListBar from "./layouts/FilterListBar";
import SearchBarAndSorter from "./layouts/SearchBarAndSorter";
import { Helmet } from "react-helmet-async";

function Projects() {
  return (
    <>
      <Helmet>
        <link
          rel="canonical"
          href={`https://alfredpaguio.vercel.app/projects`}
        />
      </Helmet>
      <div className="flex flex-col items-center gap-6">
        <TechnologiesProvider>
          <SearchBarAndSorter />
          <FilterListBar />
          <ProjectList />
        </TechnologiesProvider>
      </div>
    </>
  );
}

export default Projects;
