import React, { createContext, useReducer, useContext } from "react";

type TechnologiesState = string[];
export type Action =
  | { type: typeof ACTIONS.ADD_TECH_ON_SELECTED; payload: string }
  | { type: typeof ACTIONS.REMOVE_TECH_ON_SELECTED; payload: string }
  | { type: typeof ACTIONS.REMOVE_ALL_SELECTED };

export const ACTIONS = {
  ADD_TECH_ON_SELECTED: "add_tech_on_selected",
  REMOVE_TECH_ON_SELECTED: "remove_tech_on_selected",
  REMOVE_ALL_SELECTED: "remove_all_selected",
};

function technologiesReducer(state: TechnologiesState, action: Action) {
  switch (action.type) {
    case ACTIONS.ADD_TECH_ON_SELECTED:
      if ("payload" in action && state.includes(action.payload)) {
        return [...state];
      }
      return "payload" in action ? [...state, action.payload] : [...state];
    case ACTIONS.REMOVE_TECH_ON_SELECTED:
      return "payload" in action
        ? state.filter((tech) => tech !== action.payload)
        : [...state];
    case ACTIONS.REMOVE_ALL_SELECTED:
      return [];
    default:
      return state;
  }
}

export type TechnologiesContextType = {
  selectedTechnologies: TechnologiesState;
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

  return (
    <TechnologiesContext.Provider value={{ selectedTechnologies, dispatch }}>
      {children}
    </TechnologiesContext.Provider>
  );
}

export default TechnologiesProvider;
