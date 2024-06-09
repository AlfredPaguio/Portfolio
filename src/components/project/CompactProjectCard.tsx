"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { formatDate } from "@/utils/formatDate";
import { Badge } from "@/components/ui/badge";
import { Folder } from "lucide-react";
import { useRef } from "react";
import Image from "next/image";
import { ProjectTypeWithoutContent } from "@/data/fetchContent";

type CompactProjectCard = {
  project: ProjectTypeWithoutContent;
};

export default function CompactProjectCard({ project }: CompactProjectCard) {
  const titleRef = useRef<HTMLDivElement>(null);

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const viewTransitionNameClass = `[viewTransitionName:project-name]`;

    if (titleRef.current) {
      titleRef.current.classList.add(viewTransitionNameClass);
    }
  };

  if (!project) return null;

  return (
    <Card
      onClick={handleCardClick}
      data-status={project.status}
      className="group relative mb-4 flex h-full max-w-sm grid-cols-subgrid flex-col flex-wrap overflow-hidden border antialiased transition-all duration-300 hover:cursor-pointer hover:subpixel-antialiased md:max-w-md md:flex-nowrap lg:max-w-lg group-has-[:hover]:[&:not(:hover)]:scale-90 group-has-[:hover]:[&:not(:hover)]:opacity-50"
    >
      {project.images && project.images.length > 0 ? (
        <div className="relative h-48 w-full">
          <Image
            src={
              project.images[0].discriminant === "upload"
                ? `/${project.images[0].value.image}`
                : project.images[0].value.image
            }
            fill
            className="-z-1 absolute object-cover"
            loading="lazy"
            quality={75}
            placeholder="empty"
            alt={project.images[0].value.alt}
          />
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        </div>
      ) : (
        <div className="flex h-48 w-full items-center justify-center bg-gray-200 text-muted">
          No Image Available
        </div>
      )}

      <div
        className={`h-full w-full p-4 ${
          project.images && project.images.length > 0 ? "bg-background/70" : ""
        }`}
      >
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle className="flex items-center gap-1 text-pretty">
              {/* <Folder className="shrink-0" /> */}
              <span ref={titleRef}>{project.title}</span>
            </CardTitle>
            <Badge className="bg-transparent group-data-[status=active]:border-green-600 group-data-[status=archived]:border-gray-600 group-data-[status=maintenance]:border-yellow-600  group-data-[status=unknown]:border-primary group-data-[status=active]:text-green-600 dark:group-data-[status=active]:text-green-400 group-data-[status=archived]:text-gray-400 group-data-[status=maintenance]:text-yellow-600 dark:group-data-[status=maintenance]:text-yellow-400 group-data-[status=unknown]:text-primary">
              {project.status}
            </Badge>
          </div>

          <Badge variant={"ghost"} className="p-0">
            {formatDate(project.date)}
          </Badge>
        </CardHeader>
        <CardContent className="flex-1">
          <CardDescription className="whitespace-pre-line text-foreground">
            {project.summary || "No Summary"}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex-wrap gap-2 p-4">
          {project.stack.map((tech, index) => (
            <Badge variant={"accent"} key={index}>
              {tech}
            </Badge>
          ))}
          {/* <TechnologyIcons Stacks={project.stack} /> */}
        </CardFooter>
      </div>
    </Card>
  );
}
