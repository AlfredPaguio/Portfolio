import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ProjectList from "./ProjectList";
import { fetchProjectContent } from "@/data/fetchContent";

export default async function Page() {
  const processedProjects = await fetchProjectContent();
  return (
    <ScrollArea
      aria-orientation="horizontal"
      className="group mb-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      {processedProjects && (
        <ProjectList projects={processedProjects.projects} />
      )}
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
