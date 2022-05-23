import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  opened: false,
};

export const sideBarSlice = createSlice({
  name: "sideBar",
  initialState,
  reducers: {
    toggleSideBar: (state) => {
      state.opened = !state.opened;
    },

    openSideBar: (state) => {
      state.opened = true;
    },

    closeSideBar: (state) => {
      state.opened = false;
    },
  },
});

export const { toggleSideBar, openSideBar, closeSideBar } =
  sideBarSlice.actions;
export default sideBarSlice.reducer;
