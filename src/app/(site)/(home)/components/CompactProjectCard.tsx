import { IconComponent } from "@/components/IconComponent";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { ProjectTypeWithoutContent } from "@/data/fetchContent";
import { getImageSrc } from "@/utils/imageHelpers";
import Link from "next/link";

interface CompactProjectCardProps {
  project: { slug: string; entry: ProjectTypeWithoutContent };
}

function CompactProjectCard({ project }: CompactProjectCardProps) {
  return (
    <Card key={project.slug} className="flex flex-col overflow-hidden">
      <CardHeader className="p-0">
        <img
          src={
            project.entry.images && project.entry.images.length > 0
              ? getImageSrc(project.entry.images[0])
              : "https://fakeimg.pl/342x192?text=No+Image"
          }
          // src={"https://fakeimg.pl/342x192?text=No+Image"}
          alt={project.entry.title}
          width={400}
          height={200}
          className="h-48 w-full object-cover"
        />
      </CardHeader>
      <CardContent className="flex-grow p-6">
        <CardTitle className="mb-2">{project.entry.title}</CardTitle>
        <p className="mb-4 text-muted-foreground">{project.entry.summary}</p>
        <div className="flex flex-wrap gap-2">
          {project.entry.stack.map((tech) => (
            <Badge
              key={tech}
              variant="secondary"
              className="flex items-center gap-1"
            >
              <IconComponent techName={tech} className="h-4 w-4" />
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="bg-card-footer p-6">
        <Button asChild className="w-full">
          <Link href={`/projects/${project.slug}`}>View Project</Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

export default CompactProjectCard;
