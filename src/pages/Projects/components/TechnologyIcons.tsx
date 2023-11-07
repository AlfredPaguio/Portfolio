import { technologiesWithIcons } from "@/data/Icons";

type TechnologyIconsProps = {
  category:
    | "programmingLanguages"
    | "frameworks"
    | "libraries"
    | "developerTools"
    | "databaseManagementSystems";
};

export default function TechnologyIcons({ category }: TechnologyIconsProps) {
  return (
    <>
      {technologiesWithIcons.map((tech, key) => (
        <div key={key} className="flex justify-center items-center">
          {tech[category].map((item) => (
            <div key={item.name}>{item.Icon && <item.Icon size={32} />}</div>
          ))}
        </div>
      ))}
    </>
  );
}
