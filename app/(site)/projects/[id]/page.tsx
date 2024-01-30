import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Projects } from "@/data/Projects";
import { formatDate } from "@/lib/formatDate";
import { ArrowLeft, Folder } from "lucide-react";
import Link from "next/link";
import GithubOriginal from "@beta/devicons-react/lib/icons/GithubOriginal";
import { Label } from "@/components/ui/label";
import Image from "next/image";

export default function Page({ params }: { params: { id: string } }) {
  const project = Projects.find((p) => p.id === params.id);
  if (!project) {
    return {
      notFound: true,
    };
  }
  return (
    <div className="flex h-full flex-col items-start justify-between gap-y-2">
      <div className="flex items-center gap-x-2">
        <Button variant={"ghost"} size={"icon"} asChild>
          <Link href={"/projects"}>
            <ArrowLeft />
          </Link>
        </Button>

        <h1 className="text-md flex items-center gap-1 text-pretty font-semibold leading-none tracking-tight text-foreground [viewTransitionName:project-name] md:text-lg lg:text-xl xl:text-2xl">
          <Folder className="shrink-0" />
          {project.title}
        </h1>
      </div>
      <Badge variant={"ghost"} className="p-0">
        {formatDate(project.date)}
      </Badge>
      {/* <p className="text-sm text-muted">{project.description}</p> */}
      {/* <ReactMarkdown
      className={
        "markdown flex flex-col gap-y-2 leading-relaxed text-foreground transition-all lg:text-lg xl:text-xl"
      }
      remarkPlugins={[remarkGfm, remarkBreaks]}
    >
      {project.description}
    </ReactMarkdown> */}
      <div className="flex flex-1 flex-col gap-4 pt-4">
        <div className="space-y-4">
          <span>Stack</span>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, index) => (
              <Badge variant={"secondary"} key={index}>
                {tech}
              </Badge>
            ))}
          </div>
          {project.links && (
            <>
              <p>Links</p>
              <div className="flex gap-2">
                {project.links.GitHub && (
                  <Button variant={"ghost"} className="rounded-r-none" asChild>
                    <Link href={project.links.GitHub}>
                      <GithubOriginal className="mr-2 size-4" />
                      Github
                    </Link>
                  </Button>
                )}
              </div>
            </>
          )}
        </div>
      </div>

      {project.images &&
        project.images.length > 0 &&
        project.images.map((image, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center self-center"
          >
            <Label className="text-lg">{image.alt || `Image ${index}`}</Label>
            <Image
              loading="lazy"
              key={index}
              width={1980}
              height={1080}
              src={image.imageUrl}
              alt={image.alt || `Image ${index}`}
              className="aspect-video"
              title={image.alt || `No Description`}
            />
          </div>
        ))}
    </div>
  );
}
