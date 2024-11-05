import { reader } from "@/utils/reader";
import keystaticConfig from "@@/keystatic.config";
import { Entry } from "@keystatic/core/reader";

type ProjectType = Entry<(typeof keystaticConfig)["collections"]["projects"]>;
type ProjectTypeWithoutContent = Omit<ProjectType, "content">;

type ProjectProps = {
  projects: { slug: string; entry: ProjectTypeWithoutContent }[];
};

const fetchProjectContent = async (): Promise<ProjectProps> => {
  const fetchedProjects = await reader().collections.projects.all();

  const processedProjects = fetchedProjects.map(({ entry, slug }) => ({
    slug,
    entry: {
      ...entry,
      content: undefined,
    },
  }));

  return { projects: processedProjects };
};

type TechStackType = Entry<(typeof keystaticConfig)["singletons"]["techStack"]>;

const fetchTechStack = async (): Promise<TechStackType> => {
  const fetchedTechStack = await reader().singletons.techStack.readOrThrow();

  return fetchedTechStack;
};

export { fetchProjectContent, fetchTechStack };
export type { ProjectProps, TechStackType, ProjectType, ProjectTypeWithoutContent };
