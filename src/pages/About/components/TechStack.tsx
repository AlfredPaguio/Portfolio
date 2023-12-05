import { Technologies } from "@/data/Technologies";
import TechnologyIcons from "../../Projects/components/TechnologyIcons";

type TechnologySectionProps = {
  title: string;
  stacks: string[];
};

const TechnologySection = ({ title, stacks }: TechnologySectionProps) => (
  <div className="flex items-center py-2 text-xl font-medium">
    <h3>{title}</h3>
    <div className="flex flex-wrap gap-2 ml-4">
      <TechnologyIcons Stacks={stacks} />
    </div>
  </div>
);

export default function TechStack() {
  return (
    <div className="flex flex-col">
      <TechnologySection
        title="Programming Languages:"
        stacks={Technologies.programmingLanguages}
      />
      <TechnologySection title="Libraries:" stacks={Technologies.libraries} />
      <TechnologySection title="Frameworks:" stacks={Technologies.frameworks} />
      <TechnologySection
        title="Database Management Systems:"
        stacks={Technologies.databaseManagementSystems}
      />
      <TechnologySection
        title="Developer Tools:"
        stacks={Technologies.developerTools}
      />
    </div>
  );
}
