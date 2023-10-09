import { projectType } from "../types/project.types";

export function ProjectCard({ project }: { project: projectType }) {
  return (
    <div className="overflow-hidden rounded-lg bg-white shadow-lg dark:bg-gray-800">
      <div className="px-6 py-4">
        <h2 className="text-2xl font-semibold text-primary dark:text-accent">
          {project.title}
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-400">
          {project.description}
        </p>
        <div className="mt-4">
          <h3 className="text-lg font-semibold text-primary dark:text-accent">
            Stack
          </h3>
          <ul className="mt-2 text-gray-600 dark:text-gray-400">
            {project.stack.map((tech, index) => (
              <li key={index} className="ml-4 list-disc">
                {tech}
              </li>
            ))}
          </ul>
        </div>
        {project.responsibilities && <div className="mt-4">
          <h3 className="text-lg font-semibold text-primary dark:text-accent">
            Responsibilities
          </h3>
          <ul className="mt-2 text-gray-600 dark:text-gray-400">
            {project.responsibilities?.map((responsibility, index) => (
              <li key={index} className="ml-4 list-disc">
                {responsibility}
              </li>
            ))}
          </ul>
        </div>}
        {project.links && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold text-primary dark:text-accent">
              Links
            </h3>
            <ul className="mt-2 text-gray-600 dark:text-gray-400">
              {Object.entries(project.links).map(
                ([linkText, linkUrl], index) => (
                  <li key={index} className="ml-4">
                    <a
                      href={linkUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
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