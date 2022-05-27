import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  paths: [],
};

// [{"id":"628de3927eceae32ab8c37d1","name":"Incredible museums","description":"The best museums in Thessaloniki","locations":["628f140b6b0f365018060530"]}]

export const pathSlice = createSlice({
  name: "paths",
  initialState,
  reducers: {
    setPaths: (state, { payload }) => {
      state.paths = payload
    },
  },
});

export const { setPaths } = pathSlice.actions;
export default pathSlice.reducer;
