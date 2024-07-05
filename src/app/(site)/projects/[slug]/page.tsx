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
    <div className="2xl:max-w-8xl relative mx-auto max-w-7xl px-4 pt-8  sm:px-6 lg:px-8">
      <Breadcrumbs name={project ? project.title : "Unknown Project"} />
      {project ? (
        <div className="mx-auto text-pretty pt-4 text-foreground lg:prose-lg xl:prose-xl lg:pt-12 lg:prose-figure:mt-0 lg:prose-figcaption:mt-0 xl:prose-figure:mt-2 xl:prose-figcaption:mt-0 2xl:prose-figcaption:mt-0">
          {process.env.NODE_ENV === "development" && (
            <pre className="whitespace-pre-wrap bg-slate-950">
              <code className="text-foreground">
                {JSON.stringify(project, undefined, 2)}
              </code>
            </pre>
          )}
          <h1>{project.title}</h1>
          <p className="text-xs text-muted-foreground md:text-sm lg:text-base">
            {formatDate(project.date)}
          </p>
          <div className="mt-4 text-sm xl:text-2xl">{project.summary}</div>
          <div className="flex gap-2 py-2">
            {project.gitHubURL && (
              <Button key={"gitHubURL"} variant={"default"} asChild>
                <Link href={project.gitHubURL} className="fill-accent">
                  <Icons.github className="mr-2 size-4" />
                  {"Github"}
                </Link>
              </Button>
            )}

            {project.websiteURL && (
              <Button key={"websiteURL"} variant={"secondary"} asChild>
                <Link href={project.websiteURL} className="fill-accent">
                  <Icons.goToWebsite className="mr-2 size-4" />
                  {"Go to website"}
                </Link>
              </Button>
            )}

            {/* {project.externalLinks.discriminant
              ? project.externalLinks.value.map(({ name, url }) => {
                  return (
                    <Button key={name} variant={"outline"} asChild>
                      <Link href={url}>{name}</Link>
                    </Button>
                  );
                })
              : "No External Links Available"} */}
          </div>

          {project.externalLinks.discriminant ? (
            <div className="flex flex-col">
              <p className="text-xs text-muted-foreground md:text-sm lg:text-base">
                External Links:
              </p>
              <div className="flex gap-2">
                {project.externalLinks.value.map(({ name, url }) => {
                  return (
                    <Button key={name} variant={"outline"} asChild>
                      <Link href={url}>{name}</Link>
                    </Button>
                  );
                })}
              </div>
            </div>
          ) : (
            "No External Links Available"
          )}
          <div className="mt-4">
            <Separator className="w-1/3 bg-primary" />
            <div className="prose mx-auto mt-8 flex flex-col items-center gap-4 dark:prose-invert lg:prose-lg xl:prose-xl prose-blockquote:border-accent-foreground prose-blockquote:text-primary-foreground prose-figure:mt-0 prose-figcaption:mt-0 lg:prose-figure:mt-0 lg:prose-figcaption:mt-0 xl:prose-figure:mt-2 xl:prose-figcaption:mt-0 2xl:prose-figcaption:mt-0">
              {/* <DocumentRenderer document={await project.content()} /> */}
              {/* <CustomDocumentRenderer document={await project.content()} /> */}
              <ProjectContent />
              {project.videos &&
                project.videos.map((videoLink) => {
                  return (
                    <iframe
                      key={videoLink}
                      src={videoLink ?? undefined}
                      width="1280"
                      height="720"
                      allow="autoplay"
                    ></iframe>
                  );
                })}
              {project.images &&
                project.images.length > 0 &&
                project.images.map((image, key) => {
                  return (
                    <figure
                      className="flex flex-col items-center justify-center"
                      key={key}
                    >
                      <img
                        src={getImageSrc(image)}
                        width={getImageWidth(image)}
                        height={getImageHeight(image)}
                        alt={image.value.alt ?? `Image ${key}`}
                        className={"max-h-[800px] w-auto rounded-lg shadow-lg"}
                      />

                      {image.value.alt && (
                        <figcaption className="!mt-3">
                          {image.value.alt}
                        </figcaption>
                      )}
                    </figure>
                  );
                })}
            </div>
          </div>
          <Button
            variant={"secondary"}
            size={"sm"}
            className="items-left flex justify-center gap-2"
            asChild
          >
            <Link href={`/projects`}>
              <ArrowLeft />
              Back to project list
            </Link>
          </Button>
        </div>
      ) : (
        <Button
          variant={"secondary"}
          size={"sm"}
          className="items-left flex justify-center gap-2"
          asChild
        >
          No Project Found
          <Link href={`/projects`}>Back to project list</Link>
        </Button>
      )}
    </div>
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
