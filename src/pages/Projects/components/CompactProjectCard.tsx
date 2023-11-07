import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ProjectType } from "@/data/Projects";
import TechnologyIcons from "./TechnologyIcons";

export default function CompactProjectCard({
  project,
}: {
  project: ProjectType;
}) {
  return (
    <Card className="flex flex-col items-center rounded-lg border border-gray-200 bg-white shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 md:max-w-xl md:flex-row">
      {project.images && project.images.length > 0 && (
        <img
          className="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
          src={project.images[0].imageUrl}
          alt=""
        />
      )}
      <CardContent className="flex flex-col justify-between p-4 leading-normal">
        <CardTitle className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {project.title} - {project.date.toUTCString()}
        </CardTitle>
        <CardDescription className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          <TechnologyIcons category="programmingLanguages" />
          <TechnologyIcons category="frameworks" />
          <TechnologyIcons category="developerTools" />
          <TechnologyIcons category="databaseManagementSystems" />
          <TechnologyIcons category="libraries" />
        </CardDescription>
      </CardContent>
    </Card>
  );
}
