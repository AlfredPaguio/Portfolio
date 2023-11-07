import { Technologies } from "@/data/Technologies";
import {
  ACTIONS,
  useTechnologiesContext,
} from "../contexts/TechnologiesContext";
import TechCheckbox from "../components/TechCheckBox";
import { Card, CardContent } from "@/components/ui/card";

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
    <>
      {Technologies.map((tech, key) => (
        <Card
          key={key}
          className="bg-secondary-light/10 dark:bg-secondary-dark/10 w-full py-10"
        >
          <CardContent className="md:text-md 3xl:text-3xl mx-auto grid max-w-7xl grid-cols-2 gap-x-4 px-4 text-sm transition-all duration-300 md:gap-x-6 md:px-6 lg:text-lg xl:text-xl 2xl:text-2xl">
            <div className="grid auto-rows-min grid-cols-1 gap-y-10 md:grid-cols-2 md:gap-x-6">
              <fieldset>
                <legend className="block p-0 font-medium">
                  Programming Languages:
                </legend>
                <div className="flex flex-col gap-y-1 pt-1 md:gap-y-2">
                  {tech.programmingLanguages.sort().map((language) => (
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
                <legend className="block p-0 font-medium">Libraries:</legend>
                <div className="flex flex-col gap-y-1 pt-1 md:gap-y-2">
                  {tech.libraries.sort().map((library) => (
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
                <legend className="block p-0 font-medium">Frameworks:</legend>
                <div className="flex flex-col gap-y-1 pt-1 md:gap-y-2">
                  {tech.frameworks.sort().map((framework) => (
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
                <legend className="block p-0 font-medium">
                  Database Management Systems:
                </legend>
                <div className="flex flex-col gap-y-1 pt-1 md:gap-y-2">
                  {tech.databaseManagementSystems.sort().map((DBMS) => (
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
          </CardContent>
        </Card>
      ))}
    </>
  );
}
