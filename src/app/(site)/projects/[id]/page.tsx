import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Projects } from "@/data/Projects";
import { formatDate } from "@/lib/formatDate";
import { ArrowLeft, ArrowUpRight, Folder } from "lucide-react";
import Link from "next/link";
import GithubOriginal from "@beta/devicons-react/lib/icons/GithubOriginal";
import { Label } from "@/components/ui/label";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import rehypeSlug from "rehype-slug";
import rehypeAutoLinkHeadings from "rehype-autolink-headings";
import Markdown from "react-markdown";
import remarkBreaks from "remark-breaks";
import remarkGfm from "remark-gfm";
import React from "react";

interface ProjectProps {
  params: {
    id: string;
  };
}

function getProjectById(id: string) {
  return Projects.find((p) => p.id === id);
}

export function generateMetadata({ params }: ProjectProps): Metadata {
  const project = getProjectById(params.id);
  if (project == null) return {};
  return {
    title: project.title,
    description: project.summary || project.description,
  };
}

export function generateStaticParams(): ProjectProps["params"][] {
  return Projects.map((project) => ({
    id: project.id,
  }));
}

type LinkType = "Website" | "GitHub";

const icons: Record<LinkType, React.ComponentType> = {
  Website: ArrowUpRight,
  GitHub: GithubOriginal,
};

export default function Page({ params }: ProjectProps) {
  const project = getProjectById(params.id);

  if (!project) notFound();

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
      <Markdown
        className={
          "prose md:prose-xl prose-p:indent-8 dark:prose-invert prose-ul:list-inside prose-ul:list-disc prose-ul:marker:text-accent"
        }
        remarkPlugins={[
          remarkGfm,
          remarkBreaks,
          rehypeSlug,
          rehypeAutoLinkHeadings,
        ]}
      >
        {project.description}
      </Markdown>
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
                {project.links &&
                  Object.entries(project.links).map(([linkText, linkUrl]) => {
                    return (
                      <Button key={linkText} variant={"default"} asChild>
                        {/* <Link href={linkUrl}>
                          <GithubOriginal className="mr-2 size-4" />
                          {linkText}
                        </Link> */}

                        <Link href={linkUrl} className="fill-accent">
                          {React.createElement(icons[linkText as LinkType])}
                          {linkText}
                        </Link>
                      </Button>
                    );
                  })}
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
