import CompactProjectCard from "@/components/project/CompactProjectCard";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import { reader } from "@/utils/reader";
import Link from "next/link";
import { parseAsString, useQueryState } from "nuqs";
import ProjectList from "./ProjectList";

// 1. Create a reader
// const reader = createReader(process.cwd(), keystaticConfig);

export default async function Page() {
  // 2. Read the "Posts" collection
  // const projects = await reader().collections.projects.list();
  // const [techQuery, setTechQuery] = useQueryState("q", {
  //   history: "replace",
  //   shallow: false,
  // });
  // const [titleQuery, setTitleQuery] = useQueryState("title", {
  //   history: "replace",
  //   shallow: false,
  // });
  // const [sortQuery] = useQueryState(
  //   "sort",
  //   parseAsString
  //     .withDefault("date-desc")
  //     .withOptions({ history: "replace", shallow: false }),
  // );

  const fetchedProjects = await reader().collections.projects.all();
  // const techArray = techQuery?.split(",").map((tech) => tech.trim());

  // console.table(techArray);
  console.table(fetchedProjects);
  // const filteredProjects = projects.filter((project) => {
  //   const titleMatch = titleQuery
  //     ? project.entry.title.toLowerCase().includes(titleQuery.toLowerCase())
  //     : true;
  //   const techMatch =
  //     techQuery?.length === 0 ||
  //     project.entry.stack.some((stackTech) =>
  //       techArray?.some(
  //         (selectedTech) =>
  //           stackTech.toLowerCase() === selectedTech.toLowerCase(),
  //       ),
  //     );
  //   return titleMatch && techMatch;
  // });
  // //   // if (sortQuery) {
  // //   //   switch (sortQuery) {
  // //   //     case "date-asc":
  // //   //       filteredProjects.sort((a, b) => a.date.getTime() - b.date.getTime());
  // //   //       break;
  // //   //     case "date-desc":
  // //   //       filteredProjects.sort((a, b) => b.date.getTime() - a.date.getTime());
  // //   //       break;
  // //   //     case "name-asc":
  // //   //       filteredProjects.sort((a, b) => a.title.localeCompare(b.title));
  // //   //       break;
  // //   //     case "name-desc":
  // //   //       filteredProjects.sort((a, b) => b.title.localeCompare(a.title));
  // //   //       break;
  // //   //     default:
  // //   //       break;
  // //   //   }
  // //   // }

  // //   // dispatch(setCurrentItems(filteredProjects));
  // //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // // }, [selectedTechnologies, sortQuery, titleQuery]);

  return (
    <ScrollArea
      aria-orientation="horizontal"
      className="group mb-2 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"
    >
      {fetchedProjects &&
        fetchedProjects.map((project) => (
          <ProjectList key={project.slug} {...project} />
        ))}

      {fetchedProjects &&
        fetchedProjects.map((project) => (
          <Link href={`/projects/${project?.slug}`} key={project?.slug}>
            <CompactProjectCard
              key={project?.slug}
              slug={project?.slug ?? ""}
            />
          </Link>
        ))}
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}
