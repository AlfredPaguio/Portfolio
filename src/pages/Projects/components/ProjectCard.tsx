import { ProjectType } from "@/data/Projects";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/formatDate";
import { useState } from "react";
import { ScanEye } from "lucide-react";

type ProjectCardProps = {
  project: ProjectType;
};

export function ProjectCard({
  project,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <Card className="flex h-full flex-col border-accent shadow-2xl">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{formatDate(project.date)}</CardDescription>
        {project.images && project.images.length > 0 && (
          <div
            className="relative w-full overflow-hidden rounded-md"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              key={0}
              src={project.images[0].imageUrl}
              alt={project.images[0].alt || `Image 1`}
              className="object-cover"
              title={project.images[0].alt || `No Description`}
            />
            <Button
              variant={"ghost"}
              // onClick={() => onOpenGalleryViewer()}
              className={`hover:text-background-foreground absolute inset-0 flex h-full w-full cursor-pointer items-center justify-center transition-opacity hover:bg-background ${
                isHovered ? "opacity-90" : "opacity-0"
              }`}
            >
              <div className="flex text-foreground">
                <ScanEye className="mr-1" /> View Project
              </div>
            </Button>
          </div>
        )}
      </CardHeader>
      <CardContent className="flex flex-1 flex-col gap-4 pt-4">
        <CardDescription>{project.description}</CardDescription>

        {project.responsibilities && (
          <div className="space-y-4">
            <CardTitle>Responsibilities</CardTitle>
            <ul className="flex list-disc flex-wrap pl-4">
              {project.responsibilities.map((responsibility, index) => (
                <li key={index}>
                  <CardDescription>{responsibility}</CardDescription>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="space-y-4">
          <CardTitle>Stack</CardTitle>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, index) => (
              <Badge key={index}>{tech}</Badge>
            ))}
          </div>
        </div>
      </CardContent>
      {project.links && (
        <CardFooter className="flex flex-col items-start justify-start pt-4">
          <CardTitle>Links</CardTitle>
          <div className="flex gap-4 pt-4">
            {Object.entries(project.links).map(([linkText, linkUrl], index) => (
              <Button
                key={index}
                variant={index == 0 ? "default" : "outline"}
                asChild
              >
                <Link to={linkUrl} target="_blank" rel="noopener noreferrer">
                  {linkText}
                </Link>
              </Button>
            ))}
          </div>
        </CardFooter>
      )}
    </Card>
  );
}
