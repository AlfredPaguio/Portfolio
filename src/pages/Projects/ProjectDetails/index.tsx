import { Projects } from "@/data/Projects";
import LinkButtonIcons from "../components/LinkButtonIcons";
import { Badge } from "@/components/ui/badge";
import { useParams } from "react-router-dom";
import ErrorBoundaryPage from "@/pages/ErrorBoundaryPage";

export default function ProjectDetails() {
  const { projectId } = useParams();
  const project = Projects.find((p) => p.id === projectId);

  if (!project) {
    return <ErrorBoundaryPage />;
  }

  return (
    <div>
      <h1 className="[viewTransitionName:project-name] text-foreground font-semibold leading-none tracking-tight">{project.title}</h1>
      <p>{project.description}</p>
      <div className="flex flex-1 flex-col gap-4 pt-4">
        {project.responsibilities && (
          <div className="space-y-4">
            <span>Responsibilities</span>
            <ul className="flex list-disc flex-wrap pl-6 text-accent-foreground marker:text-accent">
              {project.responsibilities.map((responsibility, index) => (
                <li key={index}>
                  <p>{responsibility}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
        <div className="space-y-4">
          <span>Stack</span>
          <div className="flex flex-wrap gap-2">
            {project.stack.map((tech, index) => (
              <Badge variant={"secondary"} key={index}>
                {tech}
              </Badge>
            ))}
          </div>
          {project.links && (
            <>
              <p>Links</p>
              <div className="flex gap-2">
                <LinkButtonIcons
                  links={project.links}
                  displayText={true}
                  variant={"default"}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
