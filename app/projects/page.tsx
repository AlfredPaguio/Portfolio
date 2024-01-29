import TechnologiesProvider from "@/contexts/TechnologiesContext";
import SearchBarAndSorter from "./_components/SearchBarAndSorter";
import FilterListBar from "./_components/FilterListBar";
import ProjectList from "./_components/ProjectList";

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-6">
      <TechnologiesProvider>
        <SearchBarAndSorter />
        <FilterListBar />
        {/* <ProjectList /> */}
      </TechnologiesProvider>
    </div>
  );
}
