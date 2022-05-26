import { configureStore } from "@reduxjs/toolkit";
import locationsReducer from "./slices/locationsSlice";
import sideBarReducer from "./slices/sideBarSlice";
import pathReducer from "./slices/pathSlice";

export const store = configureStore({
  reducer: {
    locations: locationsReducer,
    sideBar: sideBarReducer,
    paths: pathReducer,
  },
});
