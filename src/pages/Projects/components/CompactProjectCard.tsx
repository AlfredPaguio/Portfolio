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
import TechnologyIcons from "./TechnologyIcons";

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
      className="flex max-w-md flex-col flex-wrap overflow-hidden antialiased duration-300 hover:subpixel-antialiased hover:cursor-pointer md:flex-nowrap transition-all"
    >
      <CardHeader>
        <CardTitle className="flex justify-between">
          <span className="flex gap-1 justify-center items-center">
            <Folder />
            {project.title}
          </span>
          <Badge variant={"ghost"}>{formatDate(project.date)}</Badge>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1">
        <CardDescription>{project.description}</CardDescription>
      </CardContent>
      <CardFooter className="flex-wrap">
        {/* {project.stack.map((tech, index) => (
          <Badge variant={"ghost"} key={index}>
            {tech}
          </Badge>
        ))} */}

        <TechnologyIcons Stacks={project.stack} />
      </CardFooter>
    </Card>
  );
}
