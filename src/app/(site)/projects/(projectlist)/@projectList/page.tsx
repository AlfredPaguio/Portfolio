import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { reader } from "@/utils/reader";
import ProjectList from "./ProjectList";

// 1. Create a reader
// const reader = createReader(process.cwd(), keystaticConfig);

export default async function Page() {
  // 2. Read the "Posts" collection

  const fetchedProjects = await reader().collections.projects.all();

  const processedProjects = fetchedProjects.map(({ entry, slug }) => ({
    slug,
    entry: {
      ...entry,
      content: undefined,
    },
  }));

  return (
    <ScrollArea
      aria-orientation="horizontal"
      className="group mb-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      {processedProjects && <ProjectList projects={processedProjects} />}
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
