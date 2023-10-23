import { twMerge } from "tailwind-merge";
import { ProjectProps } from "@/data/Projects";

export function ProjectCard({ project }: { project: ProjectProps }) {
  return (
    <div className="flex flex-col  gap-4 overflow-hidden rounded-lg bg-background/80 p-4 shadow-xl backdrop-blur-lg ">
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
      <h2 className="text-3xl font-bold text-white">{project.title}</h2>
      <p className="mt-2 text-xl font-normal text-white">
        {project.description}
      </p>
      <div className="mt-4 space-y-4">
        <h3 className="text-lg font-semibold text-primary">Stack</h3>
        <ul className="flex flex-wrap gap-2 pt-4">
          {project.stack.map((tech, index) => (
            <li
              key={index}
              className="m-1 flex h-8 w-fit shrink-0 items-center justify-center self-center rounded-lg bg-secondary px-3 text-xl font-normal text-white "
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
          <ul className="flex list-disc flex-wrap gap-2 pl-4 pt-4">
            {project.responsibilities.map((responsibility, index) => (
              <li key={index} className="text-white">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>
      )}

      {project.links && (
        <div className="mt-4 space-y-4">
          <h3 className="text-lg font-semibold text-primary">Links</h3>
          <ul className="flex h-fit w-full flex-row gap-4 pt-4">
            {Object.entries(project.links).map(([linkText, linkUrl], index) => (
              <li key={index} className="text-primary">
                <a
                  href={linkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={twMerge(
                    index == 0
                      ? "bg-primary"
                      : "border-2 border-solid border-text bg-transparent hover:border-transparent",
                    "mt-4 rounded-md px-6 py-2 text-xl font-medium text-white transition-colors duration-200 hover:bg-accent",
                  )}
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
