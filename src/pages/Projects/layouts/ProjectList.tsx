import { useTechnologiesContext } from "../contexts/TechnologiesContext";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import CompactProjectCard from "../components/CompactProjectCard";
import { useNavigate } from "react-router-dom";

export default function ProjectList() {
  const { currentItems } = useTechnologiesContext();
  const navigate = useNavigate();

  const handleOpenProjectDetail = (projectId: string) => {
    if (!projectId) return;
    navigate(`/projects/${projectId}`, { unstable_viewTransition: true });
  };

  return (
    <>
      <ScrollArea>
        {/* [&:has(:hover)>:not(:hover)]:scale-90 [&:has(:hover)>:not(:hover)]:opacity-50 */}
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
}
