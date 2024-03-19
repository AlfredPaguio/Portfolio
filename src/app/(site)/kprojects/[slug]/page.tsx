/* eslint-disable @next/next/no-img-element */
import Renderer from "@@/src/components/Renderer";
import { reader } from "@@/src/utils/reader";
import Image from "next/image";
// import { DocumentRenderer } from "@keystatic/core/renderer";

export default async function Post({ params }: { params: { slug: string } }) {
  const project = await reader().collections.projects.read(params.slug);
  return project ? (
    <div className="mx-auto max-w-7xl px-4 pt-8 sm:px-6 md:pt-20 lg:px-8 2xl:max-w-8xl">
      <div className="prose prose-slate mx-auto break-words prose-blockquote:border-indigo-500 prose-blockquote:text-indigo-900 prose-figure:mt-0 prose-figcaption:mt-0 lg:prose-lg lg:prose-figure:mt-0 lg:prose-figcaption:mt-0 xl:prose-xl xl:prose-figure:mt-2 xl:prose-figcaption:mt-0 2xl:prose-figcaption:mt-0">
        <h1>{project.title}</h1>

        <p className="text-base text-slate-500">{project.date}</p>
        <div className="mt-8 text-xl text-slate-600 xl:text-3xl">
          {project.summary}
        </div>
        <div className="mt-12">
          <div className="h-0.5 w-16 bg-indigo-500"></div>
          <div className="mt-8">
            {/* <DocumentRenderer document={await project.content()} /> */}
            <Renderer document={await project.content()} />
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
