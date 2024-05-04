// import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import keystaticConfig from "@@/keystatic.config";
// import { Entry } from "@keystatic/core/reader";
// import { reader } from "@/utils/reader";

// type ProjectType = Entry<(typeof keystaticConfig)["collections"]["projects"]>;

// interface ProjectsState {
//   currentItems: ProjectType[];
// }

// async function projectList() {
//   return await reader().collections.projects.all();
// }

// const initialState: ProjectsState = { currentItems: projectList };

// const projectSlice = createSlice({
//   name: "projects",
//   initialState,
//   reducers: {
//     filterProject(state, action: PayloadAction<string>) {
//       state.currentItems = state.currentItems.filter(
//         (project) => project.title !== action.payload,
//       );
//     },
//     setCurrentItems(state, action: PayloadAction<ProjectType[]>) {
//       state.currentItems = action.payload;
//     },
//     // resetProjects(state) {
//     //   state.currentItems = [...Projects];
//     // },
//     // addProject(state, action: PayloadAction<ProjectType>) {
//     //   state.value.push(action.payload);
//     // },
//     //in the future
//     // removeAllProjects(state) {
//     //   state.value = [];
//     // },
//   },
// });

// export const {
//   filterProject,
//   setCurrentItems,
//   // resetProjects,
//   //  setProjects,
//   //  removeAllProjects
// } = projectSlice.actions;
// export default projectSlice.reducer;
