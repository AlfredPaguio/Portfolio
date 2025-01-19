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

import { IconComponent } from "@/components/IconComponent";
import { Badge } from "@/components/ui/badge";
import { ProjectTypeWithoutContent } from "@/data/fetchContent";
import { formatDate } from "@/utils/formatDate";
import { getImageSrc } from "@/utils/imageHelpers";
import { useRef } from "react";

type ProjectCard = {
  project: ProjectTypeWithoutContent;
};

export default function ProjectCard({ project }: ProjectCard) {
  const titleRef = useRef<HTMLDivElement>(null);
  if (!project) return null;

  const handleCardClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const viewTransitionNameClass = `[viewTransitionName:project-name]`;

    if (titleRef.current) {
      titleRef.current.classList.add(viewTransitionNameClass);
    }
  };

  return (
    <Card
      onClick={handleCardClick}
      data-status={project.status}
      className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg"
    >
      <div className="relative h-48 w-full overflow-hidden">
        {project.images && project.images.length > 0 ? (
          <img
            src={getImageSrc(project.images[0])}
            alt={project.images[0].value.alt || project.title}
            className="object-cover transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-primary to-secondary text-foreground">
            No Image Available
          </div>
        )}
      </div>

      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="line-clamp-1 text-xl">
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

      <CardContent className="flex-grow">
        <p className="line-clamp-3">{project.summary || "No Summary"}</p>
      </CardContent>

      <CardFooter className="flex flex-wrap gap-2">
        {project.stack.slice(0, 5).map((tech, index) => (
          <Badge variant="outline" key={index} className="gap-x-1">
            <IconComponent techName={tech} />
            {tech}
          </Badge>
        ))}
        {project.stack.length > 5 && (
          <Badge variant="outline">+{project.stack.length - 5} more</Badge>
        )}
      </CardFooter>
    </Card>
  );
}
