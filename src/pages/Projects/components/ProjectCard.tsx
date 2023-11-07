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
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{project.date.toDateString()}</CardDescription>
        {project.images && project.images.length > 0 && (
          <div className="w-full">
            <AspectRatio ratio={16 / 9}>
              <img
                key={0}
                src={project.images[0].imageUrl}
                alt={project.images[0].description || `Image 1`}
                className="rounded-md object-cover"
                title={project.images[0].description || `Image 1`}
              />
            </AspectRatio>
          </div>
        )}
      </CardHeader>
      <CardContent className="grid gap-4">
        <CardDescription>{project.description}</CardDescription>

        {project.responsibilities && (
          <div className="space-y-4">
            <CardTitle>
              Responsibilities
            </CardTitle>
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
        <CardFooter className="flex flex-col items-start justify-start">
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
