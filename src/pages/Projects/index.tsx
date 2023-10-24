import Lead from "@/components/Lead";
import { ProjectCard } from "./components/projectCard";
import { Projects as ProjectsData } from "@/data/Projects";
import withPageTransition from "@/routes/components/withPageTransition";
import { SearchIcon } from "lucide-react";
import { useSearchParams } from "react-router-dom";
import TechnologyPills from "./components/TechnologyPills";
import { useReducer, useState } from "react";

type TechnologiesState = string[];
export type Action =
  | { type: typeof ACTIONS.ADD_TECH_ON_SELECTED; payload: string }
  | { type: typeof ACTIONS.REMOVE_TECH_ON_SELECTED; payload: string };

export const ACTIONS = {
  ADD_TECH_ON_SELECTED: "add_tech_on_selected",
  REMOVE_TECH_ON_SELECTED: "remove_tech_on_selected",
};

function technologiesReducer(state: TechnologiesState, action: Action) {
  switch (action.type) {
    case ACTIONS.ADD_TECH_ON_SELECTED:
      if (state.includes(action.payload)) {
        return state;
      }
      return [...state, action.payload];
    case ACTIONS.REMOVE_TECH_ON_SELECTED:
      return state.filter((tech) => tech !== action.payload);
    default:
      return state;
  }
}

function Projects() {
  const [searchParams, setSearchParams] = useSearchParams({
    queryParams: "",
    techParams: "",
  });
  const queryParams = searchParams.get("queryParams");
  // const techParams = searchParams.get("techParams");

  const [selectedTechnologies, dispatch] = useReducer(technologiesReducer, []);

  console.log(selectedTechnologies);

  const filteredItems = ProjectsData.filter((project) => {
    if (queryParams !== null) {
      console.log("here", queryParams);
      return project.title.toLowerCase().includes(queryParams.toLowerCase());
    }
    return true;
  });

  return (
    <div className="flex flex-col items-center gap-4">
      <Lead title="Projects" subtitle="Take a look at what I’ve worked on." />

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

      <TechnologyPills dispatch={dispatch} selectedTechnologies={selectedTechnologies}/>

      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filteredItems
          .sort((a, b) => b.date.getTime() - a.date.getTime())
          .map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
      </div>
    </div>
  );
}

export default withPageTransition(Projects);
