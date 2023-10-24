import { Technologies } from "@/data/Technologies";
import { ACTIONS, Action } from "../index";

type TechnologyPillsProps = {
  dispatch: React.Dispatch<Action>;
  selectedTechnologies: string[];
};

export default function TechnologyPills({ dispatch, selectedTechnologies, }: TechnologyPillsProps) {
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
        <div key={index} className="flex flex-col gap-3">
          <div className="flex flex-row justify-start gap-2">
            <h2 className="self-start pe-8 pt-2 text-xl font-medium text-slate-300">
              Programming Languages:
            </h2>

            {tech.programmingLanguages.map((language) => (
              <button
                key={language}
                onClick={() => toggleTechnology(language)}
                className={`whitespace-nowrap rounded-lg px-3 py-1 text-black ${
                  selectedTechnologies.includes(language) ? 'bg-accent' : 'bg-slate-300' 
                }`}
              >
                {language}
              </button>
            ))}
          </div>
          <div className="flex flex-row justify-start gap-2">
            <h2 className="self-start pe-8 pt-2 text-xl font-medium text-slate-300">
              Libraries:
            </h2>

            {tech.libraries.map((library) => (
              <button
                key={library}
                onClick={() => toggleTechnology(library)}
                className={`whitespace-nowrap rounded-lg px-3 py-1 text-black ${
                  selectedTechnologies.includes(library) ? 'bg-accent' : 'bg-slate-300'
                }`}
              >
                {library}
              </button>
            ))}
          </div>
          {tech.frameworks && (
            <div className="flex flex-row justify-start gap-2">
              <h2 className="self-start pe-8 pt-2 text-xl font-medium text-slate-300">
                Frameworks:
              </h2>

              {tech.frameworks.map((framework) => (
                <button
                  key={framework}
                  onClick={() => toggleTechnology(framework)}
                  className={`whitespace-nowrap rounded-lg px-3 py-1 text-black ${
                    selectedTechnologies.includes(framework) ? 'bg-accent' : 'bg-slate-300'
                  }`}
                >
                  {framework}
                </button>
              ))}
            </div>
          )}
        </div>
      ))}
    </>
  );
}
