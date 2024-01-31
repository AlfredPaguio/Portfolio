"use client";
import { ProjectType, Projects } from "../data/Projects";
import React, {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { parseAsString, useQueryState } from "nuqs";
import { useAppDispatch, useAppSelector } from "@/app/hooks";
import { addTechnology } from "@/features/technology/technology-slice";

export type TechnologiesContextType = {
  selectedTechnologies: string[];
  currentItems: ProjectType[];
};

const TechnologiesContext = createContext<TechnologiesContextType | null>(null);

export const useTechnologiesContext = () => {
  const context = useContext(TechnologiesContext);
  if (context === null)
    throw Error(
      "useTechnologiesContext must be used within a TechnologiesProvider"
    );
  return context;
};

type TechnologiesProviderProps = {
  children: React.ReactNode;
};

export function TechnologiesProvider({ children }: TechnologiesProviderProps) {
  const selectedTechnologies = useAppSelector(
    (state) => state.technology.value
  );
  const dispatch = useAppDispatch();
  const [techQuery, setTechQuery] = useQueryState("q", {
    history: "replace",
    shallow: false,
  });
  const [titleQuery] = useQueryState("title", {
    history: "replace",
    shallow: false,
  });
  const [sortQuery] = useQueryState(
    "sort",
    parseAsString
      .withDefault("date-desc")
      .withOptions({ history: "replace", shallow: false })
  );

  const [currentItems, setCurrentItems] = useState<ProjectType[]>(Projects);


  useEffect(() => {
    //why the hell if (selectedTechnologies) is truthy even empty?
    if (selectedTechnologies.length > 0) {
      setTechQuery(selectedTechnologies.join(","));
    } else {
      setTechQuery(null);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedTechnologies]);

  useEffect(() => {
    if (techQuery) {
      const techs = techQuery.split(",");
      techs.forEach((tech) => {
        dispatch(addTechnology(tech));
      });
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
                stackTech.toLowerCase() === selectedTech.toLowerCase()
            )
          ); // At least one selected technology matches project's stack
        return titleMatch && techMatch;
      }
      return true;
    });
    setCurrentItems(filteredItems);
  }, [selectedTechnologies, titleQuery]);

  useEffect(() => {
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
  }, [currentItems, sortQuery]);

  return (
    <TechnologiesContext.Provider
      value={{ selectedTechnologies, currentItems }}
    >
      {children}
    </TechnologiesContext.Provider>
  );
}

export default TechnologiesProvider;
