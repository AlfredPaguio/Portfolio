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
// import Image from "next/image";
import { Entry } from "@keystatic/core/reader";
import keystaticConfig from "@@/keystatic.config";

type ProjectType = Entry<(typeof keystaticConfig)["collections"]["projects"]>;
type ProjectTypeWithoutContent = Omit<ProjectType, "content">;

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
      className="group relative mb-4 flex max-w-sm grid-cols-subgrid flex-col flex-wrap overflow-hidden antialiased transition-all duration-300 hover:cursor-pointer hover:subpixel-antialiased data-[status=active]:border-green-600 data-[status=archived]:border-gray-600 data-[status=maintenance]:border-yellow-600 md:max-w-md md:flex-nowrap lg:max-w-lg group-has-[:hover]:[&:not(:hover)]:scale-90 group-has-[:hover]:[&:not(:hover)]:opacity-50"
    >
      {/* {project.images && project.images.length > 0 && (
        <Image
          src={project.images[0].value.image}
          fill
          className="absolute -z-50 object-cover"
          loading="lazy"
          aria-hidden
          quality={75}
          placeholder="empty"
          alt="background"
        />
      )} */}

      <div
        className={`h-full w-full`}
        // className={`h-full w-full ${
        //   project.images && project.images.length > 0 ? "bg-background/70" : ""
        // }`}
      >
        <CardHeader>
          <div className="flex justify-between">
            <CardTitle className="flex items-center gap-1 text-pretty">
              <Folder className="shrink-0" />
              <span ref={titleRef}>{project.title}</span>
            </CardTitle>
            <Badge className="group-data-[status=active]:bg-green-600 group-data-[status=archived]:bg-gray-600 group-data-[status=maintenance]:bg-yellow-600">
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
