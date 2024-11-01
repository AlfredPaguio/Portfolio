/* eslint-disable @next/next/no-img-element */
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
import { useRef } from "react";
// import Image from "next/image";
import { ProjectTypeWithoutContent } from "@/data/fetchContent";
import { getImageSrc } from "@/utils/imageHelpers";

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
      className="group relative row-span-3 w-full grid h-full grid-cols-subgrid overflow-hidden antialiased transition-all duration-300 hover:cursor-pointer hover:subpixel-antialiased group-has-[:hover]:[&:not(:hover)]:scale-90 group-has-[:hover]:[&:not(:hover)]:opacity-50"
    >
      {project.images && project.images.length > 0 ? (
        <div className="relative w-full md:h-48">
          <img
            src={getImageSrc(project.images[0])}
            className="-z-1 absolute h-full w-full object-cover"
            loading="lazy"
            alt={project.images[0].value.alt}
          />
        </div>
      ) : (
        <div className="hidden md:flex h-12 w-full items-center justify-center bg-primary text-primary-foreground md:h-48">
          No Image Available
        </div>
      )}

      <div
        className={`h-full w-full p-4`}
      >
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle className="flex items-center gap-1 text-pretty">
              {/* <Folder className="shrink-0" /> */}
              <span ref={titleRef}>{project.title}</span>
            </CardTitle>
            <Badge className="bg-accent/40 group-data-[status=active]:border-l-green-600 group-data-[status=archived]:border-l-gray-600 group-data-[status=maintenance]:border-l-yellow-600  group-data-[status=unknown]:border-l-primary group-data-[status=active]:text-green-600 group-data-[status=archived]:text-gray-400 group-data-[status=maintenance]:text-yellow-600 group-data-[status=unknown]:text-primary dark:group-data-[status=active]:text-green-400 dark:group-data-[status=maintenance]:text-yellow-400">
              {project.status}
            </Badge>
          </div>

          <Badge variant={"ghost"} className="p-0">
            {formatDate(project.date)}
          </Badge>
        </CardHeader>
        <CardContent className="h-16 p-0 pt-4 overflow-y-auto">
          <CardDescription className="text-ellipsis overflow-hidden">
            {project.summary || "No Summary"}
          </CardDescription>
        </CardContent>
        <CardFooter className="flex-wrap mt-4 gap-1 p-0 items-end">
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
