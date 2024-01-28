"use client"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useTechnologiesContext } from "@/contexts/TechnologiesContext";
import { useRouter } from "next/router";
import CompactProjectCard from "./CompactProjectCard";

const ProjectList: React.FC = () => {
  const { currentItems } = useTechnologiesContext();
  const router = useRouter();

  const handleOpenProjectDetail = (projectId: string) => {
    if (!projectId) return;
    router.push(`/projects/${projectId}`);
  };

  return (
    <>
      <ScrollArea>
        <div className="group mb-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {currentItems.map((project, index) => (
            <CompactProjectCard
              key={index}
              project={project}
              onClick={() => handleOpenProjectDetail(project.id)}
            />
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </>
  );
};

export default ProjectList;
