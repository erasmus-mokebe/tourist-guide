import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPoint: null,
};

export const currentPointSlice = createSlice({
  name: "currentPoint",
  initialState,
  reducers: {
    updatePoint: (state,action) => {
      state.currentPoint = action.payload;
    },
  },
});

export const { updatePoint } = currentPointSlice.actions;
export default currentPointSlice.reducer;
