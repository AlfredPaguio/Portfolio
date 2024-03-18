import { reader } from "@@/src/utils/reader";
import { DocumentRenderer } from "@keystatic/core/renderer";

export default async function Post({ params }: { params: { slug: string } }) {
  const project = await reader().collections.projects.read(params.slug);
  return project ? (
    <>
      <h1 className="text-lg font-medium text-destructive">{project.title}</h1>
      <div className="prose lg:prose-xl">

      <DocumentRenderer document={await project.content()} />
      </div>
      <a href={`/kprojects`}>Back to project list</a>
    </>
  ) : (
    <div>No Project Found</div>
  );
}