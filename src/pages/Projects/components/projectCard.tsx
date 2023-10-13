import { projectType } from "../types/project.types";

export function ProjectCard({ project }: { project: projectType }) {
  return (
    <div className="bg-secondary-light dark:bg-secondary-dark shadow-lg rounded-lg overflow-hidden">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-semibold text-text-light dark:text-text-dark">
          {project.title}
        </h2>
        <p className="text-text-light dark:text-text-dark mt-2">
          {project.description}
        </p>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-primary-light dark:text-primary-dark">
            Stack
          </h3>
          <ul className="text-text-light dark:text-text-dark mt-2">
            {project.stack.map((tech, index) => (
              <li key={index} className="list-disc ml-4">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        {project.responsibilities && <div className="mt-4">
          <h3 className="text-lg font-semibold text-primary-light dark:text-primary-dark">
            Responsibilities
          </h3>
          <ul className="text-text-light dark:text-text-dark mt-2">
            {project.responsibilities.map((responsibility, index) => (
              <li key={index} className="list-disc ml-4">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>}
        {project.links && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-primary-light dark:text-primary-dark">
              Links
            </h3>
            <ul className="text-text-light dark:text-text-dark mt-2">
              {Object.entries(project.links).map(([linkText, linkUrl], index) => (
                <li key={index} className="ml-4">
                  <a
                    href={linkUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-light dark:text-primary-dark hover:underline"
                  >
                    {linkText}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}