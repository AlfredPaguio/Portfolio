import { projectType } from "../types/project.types";

export function ProjectCard({ project }: { project: projectType }) {
  return (
    <div className="border-3 flex flex-col overflow-hidden rounded-lg border-accent bg-black/40 px-6 py-4 shadow-lg backdrop-blur-md">
      <h2 className="text-2xl font-semibold text-text">{project.title}</h2>
      {project.imageUrls && (
        <div className="mt-4 space-y-4">
          <h3 className="text-lg font-semibold text-primary">Images</h3>
          {project.imageUrls.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Image ${index}`}
              className="max-w-full"
            />
          ))}
        </div>
      )}
      <p className="mt-2 text-text">{project.description}</p>
      <div className="mt-4 space-y-4">
        <h3 className="text-lg font-semibold text-primary">Stack</h3>
        <ul className="flex flex-wrap gap-2">
          {project.stack.map((tech, index) => (
            <li
              key={index}
              className="m-1 inline-block self-center rounded-md bg-accent px-2 py-1 text-text"
            >
              {tech}
            </li>
          ))}
        </ul>
      </div>

      {project.responsibilities && (
        <div className="mt-4 space-y-4">
          <h3 className="text-lg font-semibold text-primary">
            Responsibilities
          </h3>
          <ul className="list-disc pl-4">
            {project.responsibilities.map((responsibility, index) => (
              <li key={index} className="text-text">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.links && (
        <div className="mt-4 space-y-4">
          <h3 className="text-lg font-semibold text-primary">Links</h3>
          <ul>
            {Object.entries(project.links).map(([linkText, linkUrl], index) => (
              <li key={index} className="text-primary">
                <a
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline"
                >
                  {linkText}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
