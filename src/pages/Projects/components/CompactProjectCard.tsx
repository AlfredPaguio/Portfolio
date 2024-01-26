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
import { useRef } from "react";

type CompactProjectCard = {
  project: ProjectType;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export default function CompactProjectCard({
  project,
  onClick,
}: CompactProjectCard) {
  const titleRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const viewTransitionNameClass = `[viewTransitionName:project-name]`;

    if (titleRef.current) {
      titleRef.current.classList.add(viewTransitionNameClass);
    }
    onClick(e);
  };

  return (
    <Card
      onClick={handleCardClick}
      data-status={project.status}
      className="relative flex max-w-sm grid-cols-subgrid flex-col flex-wrap overflow-hidden antialiased transition-all duration-300 hover:cursor-pointer hover:subpixel-antialiased data-[status=Active]:border-green-400 data-[status=Archived]:border-gray-500 data-[status=Maintenance]:border-yellow-400 md:max-w-md md:flex-nowrap lg:max-w-lg group-has-[:hover]:[&:not(:hover)]:scale-90 group-has-[:hover]:[&:not(:hover)]:opacity-50"
    >
      {project.images && project.images.length > 0 && (
        <img
          src={project.images[0].imageUrl}
          className="absolute -z-50 h-full w-full object-cover"
          aria-hidden
          alt="background"
        />
      )}

      <div
        className={
          project.images && project.images.length > 0 ? "bg-background/70" : ""
        }
      >
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle className="flex items-center gap-1 text-pretty">
              <Folder className="shrink-0" />
              <span ref={titleRef}>{project.title}</span>
            </CardTitle>
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
        <CardFooter className="flex-wrap p-4">
          {project.stack.map((tech, index) => (
            <Badge variant={"ghost"} key={index}>
              {tech}
            </Badge>
          ))}
          {/* <TechnologyIcons Stacks={project.stack} /> */}
        </CardFooter>
      </div>
    </Card>
  );
}
