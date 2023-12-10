import { useTechnologiesContext } from "../contexts/TechnologiesContext";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import CompactProjectCard from "../components/CompactProjectCard";
import { useState } from "react";
import { Dialog } from "@/components/ui/dialog";
import { ProjectType } from "@/data/Projects";
import { ProjectDetailedView } from "../components/ProjectCard";

export default function ProjectList() {
  const { currentItems } = useTechnologiesContext();

  const [isDetailedViewOpened, setIsDetailedViewOpened] = useState(false);
  const [selectedProject, setSelectedProject] = useState<
    ProjectType | undefined
  >(undefined);

  const handleOpenDetailedView = (projectId: string) => {
    const project = currentItems.find((project) => project.id === projectId);
    setSelectedProject(project || undefined);
    setIsDetailedViewOpened(true);
  };

  return (
    <>
      <ScrollArea>
        <div className="my-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 [&:has(:hover)>:not(:hover)]:scale-90 [&:has(:hover)>:not(:hover)]:opacity-50">
          {currentItems.map((project, index) => (
            <CompactProjectCard
              key={index}
              project={project}
              onOpenDetailedView={() => handleOpenDetailedView(project.id)}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>

      <Dialog
        onOpenChange={setIsDetailedViewOpened}
        open={isDetailedViewOpened}
      >
        {selectedProject && <ProjectDetailedView project={selectedProject} />}
      </Dialog>
    </>
  );
}
