import TechCheckbox from "./TechCheckBox";

interface TechFieldsetProps {
  title: string;
  techs: readonly string[];
  selectedTechnologies: string[];
  toggleTechnology: (tech: string) => void;
}

export const TechFieldset: React.FC<TechFieldsetProps> = ({
  title,
  techs,
  selectedTechnologies,
  toggleTechnology,
}) => {
  if (!techs.length) {
    return null; // Skip rendering if no techs are available
  }

  return (
    <fieldset>
      <legend className="block pb-2 text-sm font-medium leading-none text-foreground">
        {title}
      </legend>
      <div className="flex flex-col gap-y-1 pt-1 md:gap-y-2">
        {techs.toSorted().map((tech) => (
          <TechCheckbox
            key={tech}
            technology={tech}
            isSelected={selectedTechnologies.includes(tech)}
            onChangeTechnology={() => toggleTechnology(tech)}
          />
        ))}
      </div>
    </fieldset>
  );
};
