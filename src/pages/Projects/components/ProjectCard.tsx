import { ProjectType } from "@/data/Projects";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { formatDate } from "@/lib/formatDate";
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import LinkButtonIcons from "./LinkButtonIcons";

type ProjectCardProps = {
  project: ProjectType;
};

export function ProjectDetailedView({ project }: ProjectCardProps) {
  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>{project.title}</DialogTitle>
        <DialogDescription>{project.description}</DialogDescription>
        {project.images && project.images.length > 0 && (
          <img
            key={0}
            src={project.images[0].imageUrl}
            alt={project.images[0].alt || `Image 1`}
            className="aspect-auto w-full object-cover"
            title={project.images[0].alt || `No Description`}
          />
        )}
      </DialogHeader>
      <div className="flex flex-1 flex-col gap-4 pt-4">
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
              <Badge variant={"secondary"} key={index}>
                {tech}
              </Badge>
            ))}
          </div>
          {project.links && (
            <>
              <CardTitle>Links</CardTitle>
              <div className="flex gap-2">
                <LinkButtonIcons
                  links={project.links}
                  displayText={true}
                  variant={"default"}
                />
              </div>
            </>
          )}
        </div>
      </div>

      <DialogFooter className="flex items-center sm:justify-between">
        <Badge variant={"ghost"} className="p-0">
          {formatDate(project.date)}
        </Badge>
        <DialogClose asChild>
          <Button type="button" variant="destructive">
            Close
          </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}
