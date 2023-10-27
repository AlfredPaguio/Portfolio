import { SearchIcon } from "lucide-react";
import { ProjectCard } from "../components/projectCard";
import FilterListMenu from "./FilterListMenu";
import { useSearchParams } from "react-router-dom";
import { useTechnologiesContext } from "../contexts/TechnologiesContext";
import { Projects as ProjectsData } from "@/data/Projects";
import FilterListBar from "./FilterListBar";

export default function ProjectList() {
  const [searchParams, setSearchParams] = useSearchParams({
    queryParams: "",
  });
  const queryParams = searchParams.get("queryParams");

  const { selectedTechnologies, dispatch } = useTechnologiesContext();

  const filteredItems = ProjectsData.filter((project) => {
    if (queryParams !== null) {
      const titleMatch = project.title
        .toLowerCase()
        .includes(queryParams.toLowerCase());
      const techMatch =
        selectedTechnologies.length === 0 || // No technologies selected or
        project.stack.some((stackTech) =>
          selectedTechnologies.some(
            (selectedTech) =>
              stackTech.toLowerCase() === selectedTech.toLowerCase(),
          ),
        ); // At least one selected technology matches project's stack
      return titleMatch && techMatch;
    }
    return true;
  });

  return (
    <>
      <label className="relative block">
        <span className="sr-only">Search</span>
        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
          <SearchIcon className="h-5 w-5  text-slate-300"></SearchIcon>
        </span>
        <input
          className="block w-full rounded-md border border-solid border-slate-300 bg-transparent py-2 pl-9 pr-3 shadow-sm placeholder:italic placeholder:text-slate-400 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent sm:text-sm"
          placeholder="Search for anything..."
          type="text"
          onChange={(e) =>
            setSearchParams(
              (prev) => {
                prev.set("queryParams", e.target.value);
                return prev;
              },
              { replace: true },
            )
          }
          name="search"
        />
      </label>
      <FilterListBar />
      <FilterListMenu
        dispatch={dispatch}
        selectedTechnologies={selectedTechnologies}
      />

      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
      </div>
    </>
  );
}
