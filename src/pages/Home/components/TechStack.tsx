import { Technologies } from "@/data/Technologies";

export default function TechStack() {
  return (
    <div className="flex h-full w-full flex-col items-start gap-2 font-normal lg:w-2/5 lg:items-end">
      {Technologies.map((tech, index) => (
        <div key={index} className="flex flex-col">
          <h2 className="self-start pe-8 pt-2 text-xl font-medium text-slate-300 lg:self-end">
            Programming Languages
          </h2>
          <ul className="flex flex-row flex-wrap justify-start gap-2 lg:justify-end">
            {tech.programmingLanguages.map((language: string) => (
              <li
                key={language}
                className=" rounded-xl bg-secondary px-4 py-2 text-white shadow-md"
              >
                {language}
              </li>
            ))}
          </ul>

          <h2 className="self-start pe-8 pt-2 text-xl font-medium text-slate-300 lg:self-end">
            Libraries
          </h2>
          <ul className="flex flex-row flex-wrap justify-start gap-2 lg:justify-end">
            {tech.libraries.map((library: string) => (
              <li
                key={library}
                className=" rounded-xl bg-secondary px-4 py-2 text-white shadow-md"
              >
                {library}
              </li>
            ))}
          </ul>

          <h2 className="self-start pe-8 pt-2 text-xl font-medium text-slate-300 lg:self-end">
            Frameworks
          </h2>
          <ul className="flex flex-row flex-wrap justify-start gap-2 lg:justify-end">
            {tech.frameworks.map((framework: string) => (
              <li
                key={framework}
                className=" rounded-xl bg-secondary px-4 py-2 text-white shadow-md"
              >
                {framework}
              </li>
            ))}
          </ul>

          <h2 className="self-start pe-8 pt-2 text-xl font-medium text-slate-300 lg:self-end">
            Developer Tools
          </h2>
          <ul className="flex flex-row flex-wrap justify-start gap-2 lg:justify-end">
            {tech.developerTools.map((tools: string) => (
              <li
                key={tools}
                className=" rounded-xl bg-secondary px-4 py-2 text-white shadow-md"
              >
                {tools}
              </li>
            ))}
          </ul>

          <h2 className="self-start pe-8 pt-2 text-xl font-medium text-slate-300 lg:self-end">
            Database Management Systems
          </h2>
          <ul className="flex flex-row flex-wrap justify-start gap-2 lg:justify-end">
            {tech.databaseManagementSystems.map((database: string) => (
              <li
                key={database}
                className=" rounded-xl bg-secondary px-4 py-2 text-white shadow-md"
              >
                {database}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
