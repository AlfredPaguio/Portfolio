"use client";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { useRouter } from "next/navigation";
import CompactProjectCard from "../../components/CompactProjectCard";
import { useTechnologiesContext } from "@/contexts/TechnologiesContext";

export default function Home() {
  const router = useRouter();
  const { currentItems } = useTechnologiesContext();

  const handleOpenProjectDetail = (projectId: string) => {
    if (!projectId) return;
    router.push(`/projects/${projectId}`);
  };

  return (
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
  );
}
