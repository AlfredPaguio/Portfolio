"use client";
import TechCheckbox from "./TechCheckBox";
import { useAppDispatch, useAppSelector } from "@/app/store/hooks";
import {
  addTechnology,
  removeTechnology,
} from "@/app/store/technology/technology-slice";
import { TechStackType, fetchTechStack } from "@/data/fetchContent";
import { useCallback, useEffect, useState } from "react";

export default function FilterListMenu() {
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

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchTechStack();
      setStack(data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  if (!stack) return null;

  return (
    <div className="md:text-md 3xl:text-3xl grid max-w-7xl grid-cols-2 gap-x-4 pt-4 text-sm text-foreground transition-all duration-300 md:gap-x-6 lg:text-lg xl:text-xl 2xl:text-2xl">
      <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
        <fieldset>
          <legend className="block pb-2 text-sm font-medium leading-none text-foreground">
            Programming Languages:
          </legend>
          <div className="flex flex-col gap-y-1 pt-1 md:gap-y-2">
            {stack.programmingLanguages.toSorted().map((language) => (
              <TechCheckbox
                key={language}
                technology={language}
                isSelected={selectedTechnologies.includes(language)}
                onChangeTechnology={() => toggleTechnology(language)}
              />
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="block pb-2 text-sm font-medium leading-none text-foreground">
            Libraries:
          </legend>
          <div className="flex flex-col gap-y-1 pt-1 md:gap-y-2">
            {stack.libraries.toSorted().map((library) => (
              <TechCheckbox
                key={library}
                technology={library}
                isSelected={selectedTechnologies.includes(library)}
                onChangeTechnology={() => toggleTechnology(library)}
              />
            ))}
          </div>
        </fieldset>
      </div>
      <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
        <fieldset>
          <legend className="block pb-2 text-sm font-medium leading-none text-foreground">
            Frameworks:
          </legend>
          <div className="flex flex-col gap-y-1 pt-1 md:gap-y-2">
            {stack.frameworks.toSorted().map((framework) => (
              <TechCheckbox
                key={framework}
                technology={framework}
                isSelected={selectedTechnologies.includes(framework)}
                onChangeTechnology={() => toggleTechnology(framework)}
              />
            ))}
          </div>
        </fieldset>

        <fieldset>
          <legend className="block pb-2 text-sm font-medium leading-none text-foreground">
            Database Management Systems:
          </legend>
          <div className="flex flex-col gap-y-1 pt-1 md:gap-y-2">
            {stack.databaseManagementSystems.toSorted().map((DBMS) => (
              <TechCheckbox
                key={DBMS}
                technology={DBMS}
                isSelected={selectedTechnologies.includes(DBMS)}
                onChangeTechnology={() => toggleTechnology(DBMS)}
              />
            ))}
          </div>
        </fieldset>
      </div>
    </div>
  );
}
