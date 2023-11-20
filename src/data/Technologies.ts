import { ProjectType, Projects } from "./Projects";

export type TechnologyProps = {
  programmingLanguages: string[];
  frameworks: string[];
  databaseManagementSystems: string[];
  developerTools: string[];
  libraries: string[];
};

export const Technologies = {
  programmingLanguages: [
    "C#",
    "Visual Basic .NET",
    "Java",
    "PHP",
    "Python",
    "TypeScript",
    "JavaScript",
  ],
  frameworks: [
    "Laravel",
    "Laravel Livewire",
    "Flask",
    "Bootstrap",
    "TailwindCSS",
  ],
  databaseManagementSystems: ["Microsoft SQL Server", "MySQL"],
  developerTools: [
    "Git",
    "Android Studio",
    "NetBeans",
    "Microsoft Visual Studio",
    "Visual Studio Code",
  ],
  libraries: ["jQuery", "React"],
};

//I have to use set in order to get unique techs
function filterTechnologies(
  projects: ProjectType[],
  technologies: TechnologyProps,
): TechnologyProps {
  const usedTechs: Set<string> = new Set();

  projects.forEach((project) => {
    project.stack.forEach((tech) => {
      usedTechs.add(tech);
    });
  });

  // Filter
  const programmingLanguages = technologies.programmingLanguages.filter((tech) =>
    usedTechs.has(tech),
  );
  const frameworks = technologies.frameworks.filter((tech) => usedTechs.has(tech));
  const databaseManagementSystems = technologies.databaseManagementSystems.filter(
    (tech) => usedTechs.has(tech),
  );
  const developerTools = technologies.developerTools.filter((tech) =>
    usedTechs.has(tech),
  );
  const libraries = technologies.libraries.filter((tech) => usedTechs.has(tech));

  return {
    programmingLanguages,
    frameworks,
    databaseManagementSystems,
    developerTools,
    libraries,
  };
}

export const filteredTechs = filterTechnologies(Projects, Technologies);
