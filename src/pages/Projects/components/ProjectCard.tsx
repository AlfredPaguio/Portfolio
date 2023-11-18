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

export function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <Card className="flex h-full flex-col bg-background-200/20 dark:bg-background-800/20">
      <CardHeader>
        <CardTitle>{project.title}</CardTitle>
        <CardDescription>{formatDate(project.date)}</CardDescription>
        {project.images && project.images.length > 0 && (
          <div className="w-full">
            <img
              key={0}
              src={project.images[0].imageUrl}
              alt={project.images[0].description || `Image 1`}
              className="rounded-md object-cover"
              title={project.images[0].description || `Image 1`}
            />
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
        <CardFooter className="flex flex-col items-start justify-start  pt-4">
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
