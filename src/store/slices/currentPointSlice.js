import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentPoint: null,
};

export const currentPointSlice = createSlice({
  name: "currentPoint",
  initialState,
  reducers: {
    setPoint: (state, action) => {
      state.currentPoint = action.payload;
    },
  },
});

export const { setPoint } = currentPointSlice.actions;
export default currentPointSlice.reducer;
