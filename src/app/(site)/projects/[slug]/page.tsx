import { Icons } from "@/components/Icons";
import { AspectRatio } from "@/components/ui/aspect-ratio";
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
import { ProjectTypeWithoutContent } from "@/data/fetchContent";
import { REPO_OWNER } from "@/data/Repositories";
import { formatDate } from "@/utils/formatDate";
import { processMdx } from "@/utils/mdx";
import { reader } from "@/utils/reader";
import { ArrowLeft, Calendar } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectImages from "../components/ProjectImages";
import ProjectTags from "../components/ProjectTags";

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const project = await reader().collections.projects.read(params.slug);

  if (project == null) return {};

  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
      publishedTime: project.date ?? undefined,
      authors: REPO_OWNER,
    },
    twitter: {
      card: "summary_large_image",
      title: project.title,
      description: project.summary,
    },
  };
}

export async function generateStaticParams() {
  const project = await reader().collections.projects.list();

  return project.map((slug) => ({
    slug,
  }));
}

export default async function Project({ params }: Props) {
  const project = await reader().collections.projects.read(params.slug);

  if (!project) notFound();

  const { default: ProjectContent } = await processMdx(await project.content());

  return (
    <article className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
      <Breadcrumbs name={project.title} />
      {process.env.NODE_ENV === "development" && (
        <pre className="mt-8 whitespace-pre-wrap rounded-lg bg-card p-6 shadow-lg">
          <code className="text-card-foreground">
            {JSON.stringify(project, null, 2)}
          </code>
        </pre>
      )}
      <div className="mt-8 rounded-lg bg-card p-6 shadow-lg">
        <h1 className="mb-4 text-3xl font-bold text-primary lg:text-4xl">
          {project.title}
        </h1>
        <div className="mb-6 flex items-center space-x-4 text-sm text-muted-foreground">
          <time
            dateTime={formatDate(project.date)}
            className="flex items-center"
          >
            <Calendar className="mr-2 h-4 w-4" />
            {formatDate(project.date)}
          </time>
          <ProjectTags tags={project.stack} />
        </div>
        <p className="mb-6 text-lg text-card-foreground">{project.summary}</p>
        <ProjectLinks project={project} />
        <Separator className="my-8 bg-border" />
        <div className="prose max-w-none dark:prose-invert">
          <ProjectContent />
        </div>
        <ProjectVideos videos={project.videos} />
        <ProjectImages images={project.images} />
        <Button
          variant="outline"
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
