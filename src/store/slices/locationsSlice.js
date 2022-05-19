import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  locations: []
};

export const locationsSlice = createSlice({
  name: 'locations',
  initialState,
  reducers: {}
});

export const {} = locationsSlice.actions;
export default locationsSlice.reducer;
