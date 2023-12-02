import { useTechnologiesContext } from "../contexts/TechnologiesContext";
import { ProjectCard } from "../components/ProjectCard";
import { Dialog } from "@/components/ui/dialog";
import GalleryViewer from "@/components/GalleryViewer";
import { useState } from "react";

export default function ProjectList() {
  const { currentItems } = useTechnologiesContext();
  const [isGalleryViewerOpened, setIsGalleryViewerOpened] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState("");

  const handleOpenGalleryViewer = (projectId: string) => {
    setSelectedProjectId(projectId);
    setIsGalleryViewerOpened(true);
  };

  return (
    <>
      <div className="my-5 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {currentItems.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            onOpenGalleryViewer={() => handleOpenGalleryViewer(project.id)}
          />
        ))}
      </div>

      <Dialog
        onOpenChange={setIsGalleryViewerOpened}
        open={isGalleryViewerOpened}
      >
        {selectedProjectId && (
          <GalleryViewer
            projectId={selectedProjectId}
            key={selectedProjectId}
          />
        )}
      </Dialog>
    </>
  );
}
