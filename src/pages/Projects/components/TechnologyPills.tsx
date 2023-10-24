import { Technologies } from "@/data/Technologies";
import { ACTIONS, Action } from "../index";
import TechButton from "./TechButton";

type TechnologyPillsProps = {
  dispatch: React.Dispatch<Action>;
  selectedTechnologies: string[];
};

export default function TechnologyPills({
  dispatch,
  selectedTechnologies,
}: TechnologyPillsProps) {
  const toggleTechnology = (technology: string) => {
    // Check if the technology is selected
    if (selectedTechnologies.includes(technology)) {
      // If selected, remove it
      dispatch({ type: ACTIONS.REMOVE_TECH_ON_SELECTED, payload: technology });
    } else {
      // If not selected, add it
      dispatch({ type: ACTIONS.ADD_TECH_ON_SELECTED, payload: technology });
    }
    // I am having an headache here thinking this
  };

  return (
    <>
      {Technologies.map((tech, index) => (
        <div key={index} className="flex flex-row gap-2">
          <div className="flex flex-col self-start text-slate-300">
            <h2 className="text-xl font-medium">Programming Languages:</h2>
            <h2 className="text-xl font-medium">Libraries:</h2>
            <h2 className="text-xl font-medium">Frameworks:</h2>
            <h2 className="text-xl font-medium">
              Database Management Systems:
            </h2>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex flex-row justify-start gap-2">
              {tech.programmingLanguages.map((language) => (
                <TechButton
                  key={language}
                  technology={language}
                  isSelected={selectedTechnologies.includes(language)}
                  onClickTechnology={() => toggleTechnology(language)}
                />
              ))}
            </div>

            <div className="flex flex-row justify-start gap-2">
              {tech.libraries.map((library) => (
                <TechButton
                  key={library}
                  technology={library}
                  isSelected={selectedTechnologies.includes(library)}
                  onClickTechnology={() => toggleTechnology(library)}
                />
              ))}
            </div>

            <div className="flex flex-row justify-start gap-2">
              {tech.frameworks.map((framework) => (
                <TechButton
                  key={framework}
                  technology={framework}
                  isSelected={selectedTechnologies.includes(framework)}
                  onClickTechnology={() => toggleTechnology(framework)}
                />
              ))}
            </div>

            <div className="flex flex-row justify-start gap-2">
              {tech.databaseManagementSystems.map((DBMS) => (
                <TechButton
                  key={DBMS}
                  technology={DBMS}
                  isSelected={selectedTechnologies.includes(DBMS)}
                  onClickTechnology={() => toggleTechnology(DBMS)}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
