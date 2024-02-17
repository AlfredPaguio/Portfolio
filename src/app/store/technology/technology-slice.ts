import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SelectedTechnologiesState {
  selectedTechnologies: string[];
}

const initialState: SelectedTechnologiesState = { selectedTechnologies: [] };

const technologySlice = createSlice({
  name: "tech",
  initialState,
  reducers: {
    addTechnology(state, action: PayloadAction<string>) {
      if (!state.selectedTechnologies.includes(action.payload)) {
        state.selectedTechnologies.push(action.payload);
      }
    },
    batchAddTechnologies(state, action: PayloadAction<string[]>) {
      action.payload.forEach((tech) => {
        if (!state.selectedTechnologies.includes(tech)) {
          state.selectedTechnologies.push(tech);
        }
      });
    },
    removeTechnology(state, action: PayloadAction<string>) {
      state.selectedTechnologies = state.selectedTechnologies.filter(
        (tech) => tech != action.payload
      );
    },
    removeAllTechnology(state) {
      state.selectedTechnologies = [];
    },
  },
});

export const {
  addTechnology,
  batchAddTechnologies,
  removeAllTechnology,
  removeTechnology,
} = technologySlice.actions;
export default technologySlice.reducer;
