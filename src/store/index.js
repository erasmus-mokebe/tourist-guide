import { configureStore } from '@reduxjs/toolkit';
import locationsReducer from './slices/locationsSlice';

export const store = configureStore({
  reducer: {
    locations: locationsReducer
  }
});
