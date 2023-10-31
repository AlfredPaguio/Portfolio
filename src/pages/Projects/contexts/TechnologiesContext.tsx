import React, { createContext, useReducer, useContext } from "react";

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
