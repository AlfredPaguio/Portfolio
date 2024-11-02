"use client";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  addTechnology,
  removeTechnology,
} from "@/app/store/technology/technology-slice";
import { useState } from "react";
import { TechFieldset } from "./TechFieldset";
import { TechStackType } from "@/data/fetchContent";

type FilterListMenuProps = {
  techs: TechStackType;
};

export default function FilterListMenu({ techs }: FilterListMenuProps) {
  const selectedTechnologies = useAppSelector(
    (state) => state.technology.selectedTechnologies,
  );
  const dispatch = useAppDispatch();
  const [stack, setStack] = useState<TechStackType>();
  const [loading, setLoading] = useState<boolean>(true);

  const toggleTechnology = (technology: string) => {
    // Check if the technology is selected
    if (selectedTechnologies.includes(technology)) {
      // If selected, remove it
      dispatch(removeTechnology(technology));
    } else {
      // If not selected, add it
      dispatch(addTechnology(technology));
    }
    // I had a headache thinking of this lol
  };

  if (!techs) return null;

  const techCategories = {
    programmingLanguages: "Programming Languages",
    libraries: "Libraries",
    frameworks: "Frameworks",
    databaseManagementSystems: "Database Management Systems",
  };

  //get only the name of tech
  const transformedTechs = Object.fromEntries(
    Object.entries(techs).map(([category, items]) => [
      category,
      items.map((tech) => tech.name),
    ])
  );
  

  return (
    <div className="grid auto-rows-min grid-cols-1 gap-y-4 md:gap-y-10 md:grid-cols-2 md:gap-x-6 lg:grid-cols-3 xl:grid-cols-4">
      {Object.entries(techCategories).map(([key, title]) => (
        <TechFieldset
          key={key}
          title={title}
          techs={transformedTechs[key as keyof typeof techs] || []}
          selectedTechnologies={selectedTechnologies}
          toggleTechnology={toggleTechnology}
        />
      ))}
    </div>
  );
}
