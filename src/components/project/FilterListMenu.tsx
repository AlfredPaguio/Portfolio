"use client";
import TechCheckbox from "./TechCheckBox";
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

  return (
    <div className="md:text-md 3xl:text-3xl grid max-w-7xl grid-cols-2 gap-x-4 pt-4 text-sm text-foreground transition-all duration-300 md:gap-x-6 lg:text-lg xl:text-xl 2xl:text-2xl">
      <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
        <TechFieldset
          title="Programming Languages"
          techs={Array.from(techs.programmingLanguages)}
          selectedTechnologies={selectedTechnologies}
          toggleTechnology={toggleTechnology}
        />

        <TechFieldset
          title="Libraries"
          techs={Array.from(techs.libraries)}
          selectedTechnologies={selectedTechnologies}
          toggleTechnology={toggleTechnology}
        />
      </div>
      <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
        <TechFieldset
          title="Frameworks"
          techs={Array.from(techs.frameworks)}
          selectedTechnologies={selectedTechnologies}
          toggleTechnology={toggleTechnology}
        />

        <TechFieldset
          title="Database Management Systems"
          techs={Array.from(techs.databaseManagementSystems)}
          selectedTechnologies={selectedTechnologies}
          toggleTechnology={toggleTechnology}
        />
      </div>
      {process.env.NODE_ENV === "development" && (
        <pre className="whitespace-pre-wrap bg-slate-950">
          <code className="text-foreground">
            {JSON.stringify(techs, undefined, 2)}
          </code>
        </pre>
      )}
    </div>
  );
}
