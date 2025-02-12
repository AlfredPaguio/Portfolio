import { IconComponent } from "@/components/IconComponent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ProjectTypeWithoutContent } from "@/data/fetchContent";
import { formatDate } from "@/utils/formatDate";
import { getImageSrc } from "@/utils/imageHelpers";
import Link from "next/link";

interface CompactProjectCardProps {
  project: { slug: string; entry: ProjectTypeWithoutContent };
}

function CompactProjectCard({ project }: CompactProjectCardProps) {
  // Combine and limit total technologies shown
  const MAX_VISIBLE_TECHS = 3;
  const mainTechs = project.entry.stack.slice(0, MAX_VISIBLE_TECHS);
  const remainingMainTechs = project.entry.stack.length - MAX_VISIBLE_TECHS;
  
  const otherTechs = project.entry.otherStack || [];
  const totalRemainingTechs = remainingMainTechs + otherTechs.length;

  return (
    <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-lg">
      <div className="relative">
        <CardHeader className="p-0">
          {project.entry.images && project.entry.images.length > 0 ? (
            <img
              src={getImageSrc(project.entry.images[0])}
              alt={project.entry.images[0].value.alt || project.entry.title}
              className="h-48 w-full object-cover transition-transform duration-300 hover:scale-110"
              loading="lazy"
            />
          ) : (
            <div className="flex h-48 w-full items-center justify-center bg-gradient-to-r from-primary to-secondary text-foreground">
              No Image Available
            </div>
          )}
        </CardHeader>
        <Badge
          variant={project.entry.status === "active" ? "default" : "secondary"}
          className="absolute right-2 top-2 shadow-lg"
        >
          {project.entry.status}
        </Badge>
      </div>

      <CardContent className="flex flex-grow flex-col gap-4 p-6">
        <div className="space-y-1.5">
          <CardTitle className="line-clamp-1">
            {project.entry.title}
          </CardTitle>
          <time className="text-sm text-muted-foreground">
            {formatDate(project.entry.date)}
          </time>
        </div>
        <p className="line-clamp-2 flex-grow text-sm text-muted-foreground">
          {project.entry.summary}
        </p>
        <div className="flex flex-wrap gap-2">
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
        </div>
      </CardContent>

      <CardFooter className="border-t bg-muted/50 p-6">
        <Button asChild className="w-full">
          <Link href={`/projects/${project.slug}`}>View Project</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CompactProjectCard;
