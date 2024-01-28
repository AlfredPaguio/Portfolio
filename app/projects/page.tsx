import TechnologiesProvider from "@/contexts/TechnologiesContext";
import SearchBarAndSorter from "./_components/SearchBarAndSorter";
import FilterListBar from "./_components/FilterListBar";
import ProjectList from "./_components/ProjectList";

export default function Home() {
  return (
    <main className="flex h-full items-center justify-between px-4 pb-4 md:px-16">
      <TechnologiesProvider>
        <SearchBarAndSorter />
        <FilterListBar />
        {/* <ProjectList /> */}
      </TechnologiesProvider>
    </main>
  );
}
