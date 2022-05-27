import { configureStore } from "@reduxjs/toolkit";
import currentPointReducer from "./slices/currentPointSlice";
import locationsReducer from "./slices/locationsSlice";
import pathReducer from "./slices/pathSlice";
import sideBarReducer from "./slices/sideBarSlice";

export const store = configureStore({
  reducer: {
    locations: locationsReducer,
    sideBar: sideBarReducer,
    currentPoint: currentPointReducer,
    paths: pathReducer,
  },
});
