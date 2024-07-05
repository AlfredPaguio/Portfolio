import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ProjectList from "./ProjectList";
import { fetchProjectContent } from "@/data/fetchContent";

export default async function Page() {
  const processedProjects = await fetchProjectContent();
  return (
    <div className="w-full group mb-2 grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-4">
      {processedProjects && (
        <ProjectList projects={processedProjects.projects} />
      )}
    </div>
  );
}
