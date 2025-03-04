"use client";
import { IconComponent } from "@/components/IconComponent";
import { Badge } from "@/components/ui/badge";
import { ProjectTypeWithoutContent } from "@/data/fetchContent";
import { getImageSrc } from "@/utils/imageHelpers";
import Link from "next/link";

interface BentoFeaturedProjectsProps {
  projects: {
    slug: string;
    entry: ProjectTypeWithoutContent;
  }[];
}

export function BentoFeaturedProjects({
  projects,
}: BentoFeaturedProjectsProps) {
  if (!projects.length) return null;

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col items-start gap-4">
            <div>
              <Badge>Featured Projects</Badge>
            </div>
            <div className="flex flex-col gap-2">
              <h2 className="font-regular max-w-xl text-pretty text-left text-3xl tracking-tighter md:text-5xl">
                Recent Work
              </h2>
              <p className="max-w-xl text-left text-lg leading-relaxed tracking-tight text-muted-foreground lg:max-w-lg">
                Explore some of my key projects, showcasing solutions crafted to
                solve real-world challenges.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => {
              // Combine and limit total technologies shown

              const MAX_VISIBLE_TECHS = 3;

              const mainTechs = project.entry.stack.slice(0, MAX_VISIBLE_TECHS);

              const remainingMainTechs =
                project.entry.stack.length - MAX_VISIBLE_TECHS;

              const otherTechs = project.entry.otherStack || [];

              const totalRemainingTechs =
                remainingMainTechs + otherTechs.length;

              return (
                <Link
                  href={`/projects/${project.slug}`}
                  key={project.slug}
                  className={`rounded-md bg-muted p-6 transition-all hover:bg-muted/80 ${
                    index === 0 || index === 3 ? "lg:col-span-2" : ""
                  } ${
                    index === 0 || index === 3
                      ? "aspect-square lg:aspect-auto"
                      : "aspect-square"
                  } group flex flex-col justify-between`}
                >
                  <div className="relative flex items-start justify-between">
                    <img
                      src={getImageSrc(project.entry.images[0])}
                      alt={project.entry.title}
                      // className="h-[192px] w-[342px] rounded object-cover"
                      className="h-[192px] w-full rounded object-cover"
                    />
                    <Badge
                      variant="secondary"
                      className="absolute right-2 top-4 capitalize opacity-70"
                    >
                      {project.entry.status}
                    </Badge>
                  </div>

                  <div className="flex flex-col gap-4">
                    <div className="space-y-2">
                      <h3 className="text-xl font-medium tracking-tight">
                        {project.entry.title}
                      </h3>
                      <p className="line-clamp-2 text-sm text-muted-foreground">
                        {project.entry.summary}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {/* similar code to my main project card */}
                      {/* Main tech stack */}
                      {mainTechs.map((tech) => (
                        <Badge
                          key={tech}
                          className="flex items-center gap-1 bg-primary/50"
                        >
                          <IconComponent techName={tech} className="h-3 w-3" />

                          <span className="text-xs">{tech}</span>
                        </Badge>
                      ))}

                      {/* Other tech stack (if any and if space permits) */}

                      {otherTechs.length > 0 &&
                        mainTechs.length < MAX_VISIBLE_TECHS && (
                          <Badge className="flex items-center gap-1 bg-primary/50">
                            <IconComponent
                              techName={otherTechs[0]}
                              className="size-3"
                            />

                            <span className="text-xs">{otherTechs[0]}</span>
                          </Badge>
                        )}

                      {/* Show remaining count if any */}

                      {totalRemainingTechs > 0 && (
                        <Badge variant="accent" className="bg-primary/40">
                          <span className="text-xs">
                            +{totalRemainingTechs}
                          </span>
                        </Badge>
                      )}
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

          <div className="flex justify-center">
            <Link
              href="/projects"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              View all projects →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
