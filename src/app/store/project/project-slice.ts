import { ProjectType } from "@@/src/data/Projects";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Projects } from "@/data/Projects";

interface ProjectsState {
  currentItems: ProjectType[];
}

const initialState: ProjectsState = { currentItems: Projects };

const projectSlice = createSlice({
  name: "projects",
  initialState,
  reducers: {
    filterProject(state, action: PayloadAction<string>) {
      state.currentItems = state.currentItems.filter(
        (project) => project.id !== action.payload
      );
    },
    setCurrentItems(state, action: PayloadAction<ProjectType[]>) {
      state.currentItems = action.payload;
    },
    resetProjects(state) {
      state.currentItems = [...Projects];
    },
    // addProject(state, action: PayloadAction<ProjectType>) {
    //   state.value.push(action.payload);
    // },
    //in the future
    // removeAllProjects(state) {
    //   state.value = [];
    // },
  },
});

export const {
  filterProject,
  setCurrentItems,
  resetProjects,
  //  setProjects,
  //  removeAllProjects
} = projectSlice.actions;
export default projectSlice.reducer;
