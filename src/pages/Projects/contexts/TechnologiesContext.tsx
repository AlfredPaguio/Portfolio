import { ProjectType, Projects } from "@/data/Projects";
import React, {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useState,
} from "react";
import { useSearchParams } from "react-router-dom";

type TechnologiesState = string[];

export type Action = {
  type: string;
  payload?: string;
};

export const ACTIONS = {
  ADD_TECH_ON_SELECTED: "add_tech_on_selected",
  REMOVE_TECH_ON_SELECTED: "remove_tech_on_selected",
  REMOVE_ALL_SELECTED: "remove_all_selected",
};

function technologiesReducer(state: TechnologiesState, action: Action) {
  switch (action.type) {
    case ACTIONS.ADD_TECH_ON_SELECTED:
      if (typeof action.payload === "string") {
        if (state.includes(action.payload)) {
          return state;
        }
        return [...state, action.payload];
      }
      return state;
    case ACTIONS.REMOVE_TECH_ON_SELECTED:
      if (typeof action.payload === "string") {
        return state.filter((tech) => tech !== action.payload);
      }
      return state;
    case ACTIONS.REMOVE_ALL_SELECTED:
      return [];
    default:
      return state;
  }
}

export type TechnologiesContextType = {
  selectedTechnologies: TechnologiesState;
  currentItems: ProjectType[];
  dispatch: React.Dispatch<Action>;
};

const TechnologiesContext = createContext<TechnologiesContextType | null>(null);

export const useTechnologiesContext = () => {
  const context = useContext(TechnologiesContext);
  if (context === null)
    throw Error(
      "useTechnologiesContext must be used within a TechnologiesProvider",
    );
  return context;
};

type TechnologiesProviderProps = {
  children: React.ReactNode;
};

export function TechnologiesProvider({ children }: TechnologiesProviderProps) {
  const [selectedTechnologies, dispatch] = useReducer(technologiesReducer, []);
  const [searchParams] = useSearchParams();
  const [currentItems, setCurrentItems] = useState<ProjectType[]>(Projects);

  const titleQuery = searchParams?.get("title") || "";
  const sortQuery = searchParams?.get("sort") || "date-desc";

  console.time("filter array");
  useEffect(() => {
    //avoid mutating the original data
    const filteredItems = [...Projects].filter((project) => {
      if (titleQuery !== null) {
        const titleMatch = project.title
          .toLowerCase()
          .includes(titleQuery.toLowerCase());
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
    setCurrentItems(filteredItems);
  }, [selectedTechnologies, titleQuery]);
  console.timeEnd("filter array");

  console.time("sort array");
  if (sortQuery !== null) {
    switch (sortQuery) {
      case "date-asc":
        currentItems.sort((a, b) => a.date.getTime() - b.date.getTime());
        break;
      case "date-desc":
        currentItems.sort((a, b) => b.date.getTime() - a.date.getTime());
        break;
      case "name-asc":
        currentItems.sort((a, b) => a.title.localeCompare(b.title));
        break;
      case "name-desc":
        currentItems.sort((a, b) => b.title.localeCompare(a.title));
        break;
    }
  }
  console.timeEnd("sort array");

  return (
    <TechnologiesContext.Provider
      value={{ selectedTechnologies, dispatch, currentItems }}
    >
      {children}
    </TechnologiesContext.Provider>
  );
}

export default TechnologiesProvider;
