import { projectType } from "../types/project.types";

export function ProjectCard({ project }: { project: projectType }) {
  return (
    <div className="overflow-hidden rounded-lg bg-secondary shadow-lg">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-semibold text-text">
          {project.title}
        </h2>
        <p className="mt-2 text-text">
          {project.description}
        </p>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-primary">
            Stack
          </h3>
          <ul className="mt-2 flex flex-wrap justify-center space-x-2 text-text">
            {project.stack.map((tech, index) => (
              <li
                key={index}
                className="m-1 inline-block self-center rounded-md bg-accent px-2 py-1 text-text-dark"
              >
                {tech}
              </li>
            ))}
          </ul>
        </div>
        {project.responsibilities && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-primary">
              Responsibilities
            </h3>
            <ul className="mt-2 text-text">
              {project.responsibilities.map((responsibility, index) => (
                <li key={index} className="ml-4 list-disc">
                  {responsibility}
                </li>
              ))}
            </ul>
          </div>
        )}
        {project.links && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-primary-light dark:text-primary-dark">
              Links
            </h3>
            <ul className="mt-2 text-text-light dark:text-text-dark">
              {Object.entries(project.links).map(
                ([linkText, linkUrl], index) => (
                  <li key={index} className="ml-4">
                    <a
                      href={linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-light hover:underline dark:text-primary-dark"
                    >
                      {linkText}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
