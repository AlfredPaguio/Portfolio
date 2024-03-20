/* eslint-disable @next/next/no-img-element */
import CustomDocumentRenderer from "@/components/renderers/CustomDocumentRenderer";
import { Separator } from "@/components/ui/separator";
import { reader } from "@@/src/utils/reader";
// import Image from "next/image";

export default async function Post({ params }: { params: { slug: string } }) {
  const project = await reader().collections.projects.read(params.slug);
  return project ? (
    <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 md:pt-20 lg:px-8 2xl:max-w-8xl">
      <div className="mx-auto text-pretty text-foreground lg:prose-lg lg:prose-figure:mt-0 lg:prose-figcaption:mt-0 xl:prose-xl xl:prose-figure:mt-2 xl:prose-figcaption:mt-0 2xl:prose-figcaption:mt-0">
        <h1>{project.title}</h1>
        <p className="text-base text-muted">{project.date}</p>
        <div className="mt-4 text-sm xl:text-2xl">
          {project.summary}
        </div>
        <div className="mt-8">
          <Separator className="w-1/3 bg-primary"/>
          <div className="mx-auto mt-8 prose dark:prose-invert prose-blockquote:border-accent-foreground prose-blockquote:text-primary-foreground prose-figure:mt-0 prose-figcaption:mt-0 lg:prose-lg lg:prose-figure:mt-0 lg:prose-figcaption:mt-0 xl:prose-xl xl:prose-figure:mt-2 xl:prose-figcaption:mt-0 2xl:prose-figcaption:mt-0">
            {/* <DocumentRenderer document={await project.content()} /> */}
            <CustomDocumentRenderer document={await project.content()} />
            {project.images.map((image, key) => {
              return (
                <figure key={key}>
                  <img
                    src={image.value.image}
                    width={640}
                    height={480}
                    alt={image.value.alt ?? `Image ${key}`}
                    className={"max-h-[800px] w-auto rounded-lg shadow-lg"}
                  />

                  {image.value.alt && (
                    <figcaption className="!mt-3">{image.value.alt}</figcaption>
                  )}
                </figure>
              );
            })}
          </div>
        </div>
      </div>

      <a href={`/kprojects`}>Back to project list</a>
    </div>
  ) : (
    <div>No Project Found</div>
  );
}
