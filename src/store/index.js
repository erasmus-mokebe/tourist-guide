import { configureStore } from '@reduxjs/toolkit';
import currentPointSlice from './slices/currentPointSlice';
import locationsReducer from './slices/locationsSlice';
import sideBarReducer from './slices/sideBarSlice';

export const store = configureStore({
  reducer: {
    locations: locationsReducer,
    sideBar: sideBarReducer,
    currentPoint: currentPointSlice
  }
});
