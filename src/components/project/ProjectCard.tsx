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

type ProjectCard = {
  project: ProjectTypeWithoutContent;
};

export default function ProjectCard({ project }: ProjectCard) {
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
      className="h-full overflow-hidden transition-shadow hover:shadow-lg"
    >
      {project.images && project.images.length > 0 ? (
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={getImageSrc(project.images[0])}
            className="absolute h-full w-full object-cover transition-transform duration-300 hover:scale-110"
            loading="lazy"
            alt={project.images[0].value.alt}
          />
        </div>
      ) : (
        <div className="bg-gradient-to-r flex h-48 w-full items-center justify-center from-primary to-secondary text-primary-foreground">
          No Image Available
        </div>
      )}

      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-pretty text-xl">
            {/* <Folder className="shrink-0" /> */}
            <span ref={titleRef}>{project.title}</span>
          </CardTitle>
          <Badge
            variant={project.status === "active" ? "default" : "secondary"}
          >
            {project.status}
          </Badge>
        </div>
        <CardDescription>{formatDate(project.date)}</CardDescription>
      </CardHeader>

      <CardContent>
        <p className="line-clamp-3">{project.summary || "No Summary"}</p>
      </CardContent>

      <CardFooter className="flex flex-wrap gap-2">
        {project.stack.map((tech, index) => (
          <Badge variant={"outline"} key={index}>
            {tech}
          </Badge>
        ))}
        {/* <TechnologyIcons Stacks={project.stack} /> */}
      </CardFooter>
    </Card>
  );
}
