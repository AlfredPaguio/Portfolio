import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { ProjectType } from "@/data/Projects";
import { formatDate } from "@/lib/formatDate";
import { Badge } from "@/components/ui/badge";
import { Folder } from "lucide-react";
import LinkButtonIcons from "./LinkButtonIcons";
// import TechnologyIcons from "./TechnologyIcons";

type CompactProjectCard = {
  project: ProjectType;
  onOpenDetailedView: () => void;
};

export default function CompactProjectCard({
  project,
  onOpenDetailedView,
}: CompactProjectCard) {
  return (
    <Card
      onClick={() => onOpenDetailedView()}
      className="flex max-w-sm md:max-w-md lg:max-w-lg grid-cols-subgrid flex-col flex-wrap overflow-hidden antialiased transition-all duration-300 hover:cursor-pointer hover:subpixel-antialiased md:flex-nowrap group-has-[:hover]:[&:not(:hover)]:scale-90 group-has-[:hover]:[&:not(:hover)]:opacity-50"
    >
      <CardHeader>
        <div className="flex justify-between">
          <CardTitle>
            <span className="flex items-center gap-1 text-pretty">
              <Folder className="shrink-0" />
              {project.title}
            </span>
          </CardTitle>
          {project.links && (
            <div className="flex gap-2">
              <LinkButtonIcons links={project.links} />
            </div>
          )}
        </div>

        <Badge variant={"ghost"} className="p-0">
          {formatDate(project.date)}
        </Badge>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription className="whitespace-pre-line">
          {project.summary ||
            (project.description
              ? project.description.slice(0, 100) + "..."
              : "No Description")}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex-wrap">
        {project.stack.map((tech, index) => (
          <Badge variant={"ghost"} key={index}>
            {tech}
          </Badge>
        ))}
        {/* <TechnologyIcons Stacks={project.stack} /> */}
      </CardFooter>
    </Card>
  );
}
