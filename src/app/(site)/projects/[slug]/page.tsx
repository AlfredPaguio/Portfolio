/* eslint-disable @next/next/no-img-element */
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { formatDate } from "@/utils/formatDate";
import { reader } from "@@/src/utils/reader";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Icons } from "@/components/Icons";
import { processMdx } from "@/utils/mdx";
import { ArrowLeft } from "lucide-react";
import { Metadata } from "next";
import {
  getImageHeight,
  getImageSrc,
  getImageWidth,
} from "@/utils/imageHelpers";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ProjectTypeWithoutContent } from "@/data/fetchContent";
import ProjectImages from "../components/ProjectImages";
// import Image from "next/image";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await reader().collections.projects.read(params.slug);

  if (project == null) return {};

  return {
    title: project.title,
    description: project.summary,
  };
}

export async function generateStaticParams() {
  const project = await reader().collections.projects.list();

  return project.map((slug) => ({
    slug,
  }));
}

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const project = await reader().collections.projects.read(params.slug);

  if (!project) notFound();

  const { default: ProjectContent } = await processMdx(await project.content());

  return (
    <article className="2xl:max-w-8xl mx-auto max-w-7xl px-4 pt-8 sm:px-6 lg:px-8">
      <Breadcrumbs name={project.title} />
      <div className="mx-auto pt-4 text-foreground lg:prose-lg xl:prose-xl lg:pt-12">
        {process.env.NODE_ENV === "development" && (
          <pre className="whitespace-pre-wrap bg-slate-950">
            <code className="text-foreground">
              {JSON.stringify(project, null, 2)}
            </code>
          </pre>
        )}
        <h1 className="mb-2">{project.title}</h1>
        <time
          dateTime={formatDate(project.date)}
          className="text-xs text-muted-foreground md:text-sm lg:text-base"
        >
          {formatDate(project.date)}
        </time>
        <p className="mt-4 text-sm xl:text-2xl">{project.summary}</p>
        <ProjectLinks project={project} />
        <Separator className="my-8 w-1/3 bg-primary" />
        <div className="prose mx-auto mt-8 flex flex-col items-center gap-4 dark:prose-invert lg:prose-lg xl:prose-xl">
          <ProjectContent />
          <ProjectVideos videos={project.videos} />
          <ProjectImages images={project.images} />
        </div>
        <Button
          variant="secondary"
          size="sm"
          className="mt-8 flex items-center gap-2"
          asChild
        >
          <Link href="/projects">
            <ArrowLeft className="h-4 w-4" />
            Back to project list
          </Link>
        </Button>
      </div>
    </article>
  );
}

function Breadcrumbs({ name }: { name: string }) {
  return (
    <Breadcrumb>
      <BreadcrumbList className="text-sm md:text-base lg:text-lg xl:text-xl">
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/projects">Projects</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        <BreadcrumbItem>
          <BreadcrumbPage>{name}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
}

function ProjectLinks({ project }: { project: ProjectTypeWithoutContent }) {
  return (
    <>
      <div className="mt-4 flex flex-wrap gap-4">
        {project.gitHubURL && (
          <Button variant="default" asChild>
            <Link href={project.gitHubURL}>
              <Icons.github className="mr-2 h-4 w-4" />
              GitHub
            </Link>
          </Button>
        )}
        {project.websiteURL && (
          <Button variant="secondary" asChild>
            <Link href={project.websiteURL}>
              <Icons.goToWebsite className="mr-2 h-4 w-4" />
              Go to website
            </Link>
          </Button>
        )}
      </div>
      {project.externalLinks.discriminant && (
        <div className="flex flex-col">
          <p className="text-xs text-muted-foreground md:text-sm lg:text-base">
            External Links:
          </p>
          <div className="flex flex-wrap gap-2">
            {project.externalLinks.value.map(({ name, url }) => (
              <Button key={name} variant="outline" asChild>
                <Link href={url}>{name}</Link>
              </Button>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function ProjectVideos({
  videos,
}: {
  videos: ProjectTypeWithoutContent["videos"];
}) {
  if (!videos || videos.length === 0) return null;
  return (
    <>
      {videos.map((videoLink) => (
        <div key={videoLink} className="w-full">
          <AspectRatio ratio={16 / 9} className="bg-muted">
            <iframe
              src={videoLink!}
              width="1280"
              height="720"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Project video"
              className="h-full w-full"
            />
          </AspectRatio>
        </div>
      ))}
    </>
  );
}
