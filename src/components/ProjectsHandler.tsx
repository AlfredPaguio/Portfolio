// import { parseAsString, useQueryState } from "nuqs";
// import { useAppDispatch, useAppSelector } from "../app/store/hooks";
// import { useEffect } from "react";
// import { batchAddTechnologies } from "../app/store/technology/technology-slice";
// import { setCurrentItems } from "../app/store/project/project-slice";
// import { reader } from "@/utils/reader";

// // type ProjectType = Entry<typeof keystaticConfig['collections']['projects']>

// export default async function ProjectsHandler() {
//   const selectedTechnologies = useAppSelector(
//     (state) => state.technology.selectedTechnologies,
//   );
//   const dispatch = useAppDispatch();
//   const [techQuery, setTechQuery] = useQueryState("q", {
//     history: "replace",
//     shallow: false,
//   });
//   const [titleQuery, setTitleQuery] = useQueryState("title", {
//     history: "replace",
//     shallow: false,
//   });
//   const [sortQuery] = useQueryState(
//     "sort",
//     parseAsString
//       .withDefault("date-desc")
//       .withOptions({ history: "replace", shallow: false }),
//   );

//   useEffect(() => {
//     if (techQuery) {
//       const techs = techQuery.split(",");
//       dispatch(batchAddTechnologies(techs));
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   useEffect(() => {
//     if (titleQuery == "" || !titleQuery) {
//       setTitleQuery(null);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);

//   useEffect(() => {
//     //why the hell if (selectedTechnologies) is truthy even empty?
//     if (selectedTechnologies.length > 0) {
//       setTechQuery(selectedTechnologies.join(","));
//     } else {
//       setTechQuery(null);
//     }
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [selectedTechnologies]);

//   const projectsRaw = await reader().collections.projects.list();

//   const projectPromises = projectsRaw.map(async (slug) => {
//     try {
//       return await reader().collections.projects.readOrThrow(slug);
//     } catch (error) {
//       return null;
//     }
//   });

//   const projects = await Promise.all(projectPromises);

//   useEffect(() => {
//     const filteredProjects = projects.filter((project) => {
//       const titleMatch = titleQuery
//         ? project?.title.toLowerCase().includes(titleQuery.toLowerCase())
//         : true;
//       const techMatch =
//         selectedTechnologies.length === 0 ||
//         project?.stack.some((stackTech) =>
//           selectedTechnologies.some(
//             (selectedTech) =>
//               stackTech.toLowerCase() === selectedTech.toLowerCase(),
//           ),
//         );
//       return titleMatch && techMatch;
//     });
//     // if (sortQuery) {
//     //   switch (sortQuery) {
//     //     case "date-asc":
//     //       filteredProjects.sort((a, b) => a.date.getTime() - b.date.getTime());
//     //       break;
//     //     case "date-desc":
//     //       filteredProjects.sort((a, b) => b.date.getTime() - a.date.getTime());
//     //       break;
//     //     case "name-asc":
//     //       filteredProjects.sort((a, b) => a.title.localeCompare(b.title));
//     //       break;
//     //     case "name-desc":
//     //       filteredProjects.sort((a, b) => b.title.localeCompare(a.title));
//     //       break;
//     //     default:
//     //       break;
//     //   }
//     // }

//     dispatch(setCurrentItems(filteredProjects));
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, [selectedTechnologies, sortQuery, titleQuery]);

//   return null;
// }
