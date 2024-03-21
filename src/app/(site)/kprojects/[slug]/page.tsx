/* eslint-disable @next/next/no-img-element */
import CustomDocumentRenderer from "@/components/renderers/CustomDocumentRenderer";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { reader } from "@@/src/utils/reader";
import Link from "next/link";
// import Image from "next/image";

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const project = await reader().collections.projects.read(params.slug);
  return (
    <div className="2xl:max-w-8xl relative mx-auto max-w-7xl px-4 pt-8  sm:px-6 lg:px-8">
      <Breadcrumbs name={project ? project.title : "Unknown Project"} />
      {project ? (
        <div className="mx-auto text-pretty pt-4 text-foreground lg:prose-lg xl:prose-xl lg:pt-12 lg:prose-figure:mt-0 lg:prose-figcaption:mt-0 xl:prose-figure:mt-2 xl:prose-figcaption:mt-0 2xl:prose-figcaption:mt-0">
          <h1>{project.title}</h1>
          <p className="text-xs text-muted md:text-sm lg:text-base">
            {project.date}
          </p>
          <div className="mt-4 text-sm xl:text-2xl">{project.summary}</div>
          <div className="mt-8">
            <Separator className="w-1/3 bg-primary" />
            <div className="prose mx-auto mt-8 dark:prose-invert lg:prose-lg xl:prose-xl prose-blockquote:border-accent-foreground prose-blockquote:text-primary-foreground prose-figure:mt-0 prose-figcaption:mt-0 lg:prose-figure:mt-0 lg:prose-figcaption:mt-0 xl:prose-figure:mt-2 xl:prose-figcaption:mt-0 2xl:prose-figcaption:mt-0">
              {/* <DocumentRenderer document={await project.content()} /> */}
              <CustomDocumentRenderer document={await project.content()} />
              {project.images &&
                project.images.length > 0 &&
                project.images.map((image, key) => {
                  return (
                    <figure
                      className="flex flex-col items-center justify-center"
                      key={key}
                    >
                      <img
                        src={image.value.image}
                        width={640}
                        height={480}
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
          <Link href={`/kprojects`}>Back to project list</Link>
        </div>
      ) : (
        <div>
          No Project Found
          <Link href={`/kprojects`}>Back to project list</Link>
        </div>
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
            <Link href="/kprojects">Projects</Link>
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