import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import Image from "next/image";
import { IconComponent } from "@/components/IconComponent";
import { reader } from "@/utils/reader";

async function getFeaturedProjects() {
  const projects = await reader().collections.projects.all();
  return projects.filter((project) => project.entry.featured).slice(0, 3);
}

export default async function FeaturedProjects() {
  const featuredProjects = await getFeaturedProjects();

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card key={project.slug} className="flex flex-col overflow-hidden">
              <CardHeader className="p-0">
                <img
                  // src={project.entry.images[0].value || "https://fakeimg.pl/342x192?text=No+Image"}
                  src={"https://fakeimg.pl/342x192?text=No+Image"}
                  alt={project.entry.title}
                  width={400}
                  height={200}
                  className="h-48 w-full object-cover"
                />
              </CardHeader>
              <CardContent className="flex-grow p-6">
                <CardTitle className="mb-2">{project.entry.title}</CardTitle>
                <p className="mb-4 text-muted-foreground">
                  {project.entry.summary}
                </p>
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
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg">
            <Link href="/projects">View All Projects</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
