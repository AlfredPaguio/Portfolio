import { filteredTechs } from "@/data/Technologies";
import {
  ACTIONS,
  useTechnologiesContext,
} from "../contexts/TechnologiesContext";
import TechCheckbox from "../components/TechCheckBox";

export default function FilterListMenu() {
  const { selectedTechnologies, dispatch } = useTechnologiesContext();

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
    <div className="md:text-md 3xl:text-3xl grid max-w-7xl grid-cols-2 gap-x-4 pt-4 text-sm text-text-light transition-all duration-300 dark:text-text-dark md:gap-x-6 lg:text-lg xl:text-xl 2xl:text-2xl">
      <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
        <fieldset>
          <legend className="text-foreground block pb-2 text-sm font-medium leading-none">
            Programming Languages:
          </legend>
          <div className="flex flex-col gap-y-1 pt-1 md:gap-y-2">
            {filteredTechs.programmingLanguages.sort().map((language) => (
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
          <legend className="text-foreground block pb-2 text-sm font-medium leading-none">
            Libraries:
          </legend>
          <div className="flex flex-col gap-y-1 pt-1 md:gap-y-2">
            {filteredTechs.libraries.sort().map((library) => (
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
          <legend className="text-foreground block pb-2 text-sm font-medium leading-none">
            Frameworks:
          </legend>
          <div className="flex flex-col gap-y-1 pt-1 md:gap-y-2">
            {filteredTechs.frameworks.sort().map((framework) => (
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
          <legend className="text-foreground block pb-2 text-sm font-medium leading-none">
            Database Management Systems:
          </legend>
          <div className="flex flex-col gap-y-1 pt-1 md:gap-y-2">
            {filteredTechs.databaseManagementSystems.sort().map((DBMS) => (
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
