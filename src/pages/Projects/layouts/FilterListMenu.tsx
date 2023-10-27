import { Technologies } from "@/data/Technologies";
import {
  ACTIONS,
  TechnologiesContextType,
} from "../contexts/TechnologiesContext";
import TechCheckbox from "../components/TechCheckBox";

export default function FilterListMenu({
  dispatch,
  selectedTechnologies,
}: TechnologiesContextType) {
  const toggleTechnology = (technology: string) => {
    // Check if the technology is selected
    if (selectedTechnologies.includes(technology)) {
      // If selected, remove it
      dispatch({ type: ACTIONS.REMOVE_TECH_ON_SELECTED, payload: technology });
    } else {
      // If not selected, add it
      dispatch({ type: ACTIONS.ADD_TECH_ON_SELECTED, payload: technology });
    }
    // I had a headache thinking of this lol
  };

  return (
    <>
      {Technologies.map((tech) => (
        <div className="border-t border-solid border-slate-300 py-10">
          <div className="md:text-md 3xl:text-3xl mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-6 text-sm transition-all duration-300 md:gap-x-6 md:px-4 lg:text-lg xl:text-xl 2xl:text-2xl">
            <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
              <fieldset>
                <legend className="block p-0 font-medium">
                  Programming Languages:
                </legend>
                <div className="pt-1">
                  {tech.programmingLanguages.sort().map((language) => (
                    <div className="flex items-center">
                      <TechCheckbox
                        key={language}
                        technology={language}
                        isSelected={selectedTechnologies.includes(language)}
                        onChangeTechnology={() => toggleTechnology(language)}
                      />
                    </div>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="block p-0 font-medium">Libraries:</legend>
                <div className="pt-1">
                  {tech.libraries.sort().map((library) => (
                    <div className="flex items-center">
                      <TechCheckbox
                        key={library}
                        technology={library}
                        isSelected={selectedTechnologies.includes(library)}
                        onChangeTechnology={() => toggleTechnology(library)}
                      />
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
            <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
              <fieldset>
                <legend className="block p-0 font-medium">Frameworks:</legend>
                <div className="pt-1">
                  {tech.frameworks.sort().map((framework) => (
                    <div className="flex items-center">
                      <TechCheckbox
                        key={framework}
                        technology={framework}
                        isSelected={selectedTechnologies.includes(framework)}
                        onChangeTechnology={() => toggleTechnology(framework)}
                      />
                    </div>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend className="block p-0 font-medium">
                  Database Management Systems:
                </legend>
                <div className="pt-1">
                  {tech.databaseManagementSystems.sort().map((DBMS) => (
                    <div className="flex items-center">
                      <TechCheckbox
                        key={DBMS}
                        technology={DBMS}
                        isSelected={selectedTechnologies.includes(DBMS)}
                        onChangeTechnology={() => toggleTechnology(DBMS)}
                      />
                    </div>
                  ))}
                </div>
              </fieldset>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
