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

  // Combine and limit total technologies shown
  const MAX_VISIBLE_TECHS = 4;
  const mainTechs = project.stack.slice(0, MAX_VISIBLE_TECHS);
  const remainingMainTechs = project.stack.length - MAX_VISIBLE_TECHS;

  const otherTechs = project.otherStack || [];
  const totalRemainingTechs = remainingMainTechs + otherTechs.length;

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
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-110"
            loading="lazy"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-r from-primary to-secondary text-foreground">
            No Image Available
          </div>
        )}
        <Badge
          variant={project.status === "active" ? "default" : "secondary"}
          className="absolute right-2 top-2 shadow-lg"
        >
          {project.status}
        </Badge>
      </div>

      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="line-clamp-1 text-xl">
            <span ref={titleRef}>{project.title}</span>
          </CardTitle>
          <CardDescription>{formatDate(project.date)}</CardDescription>
        </div>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="line-clamp-3 text-sm text-muted-foreground">
          {project.summary || "No Summary"}
        </p>
      </CardContent>

      <CardFooter className="flex flex-wrap gap-2">
        {/* Hacky solution but it works lol */}
        {/* Main tech stack */}
        {mainTechs.map((tech) => (
          <Badge variant="secondary" key={tech} className="gap-x-1">
            <IconComponent techName={tech} />
            {tech}
          </Badge>
        ))}

        {/* Other tech stack (if any and if space permits) */}
        {otherTechs.length > 0 && mainTechs.length < MAX_VISIBLE_TECHS && (
          <Badge variant="secondary" className="gap-x-1">
            <IconComponent techName={otherTechs[0]} />
            {otherTechs[0]}
          </Badge>
        )}

        {/* Show remaining count if any */}
        {totalRemainingTechs > 0 && (
          <Badge variant="outline">+{totalRemainingTechs} more</Badge>
        )}
      </CardFooter>
    </Card>
  );
}
