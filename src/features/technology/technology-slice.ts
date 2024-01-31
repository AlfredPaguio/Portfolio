import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SelectedState {
  value: string[];
}

const initialState: SelectedState = { value: [] };

const technologySlice = createSlice({
  name: "tech",
  initialState,
  reducers: {
    addTechnology(state, action: PayloadAction<string>) {
      if (!state.value.includes(action.payload)) {
        state.value.push(action.payload);
      }
    },
    removeTechnology(state, action: PayloadAction<string>) {
      state.value = state.value.filter((tech) => tech != action.payload);
    },
    removeAllTechnology(state) {
      state.value = [];
    },
  },
});

export const { addTechnology, removeAllTechnology, removeTechnology } =
  technologySlice.actions;
export default technologySlice.reducer;
