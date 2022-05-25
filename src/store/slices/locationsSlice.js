import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locations: [],
  filters: {
    type: "all",
  },
};

export const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    setLocations: (state, action) => {
      state.locations = action.payload;
    },
    filterType: (state, action) => {
      state.filters.type = action.payload;
    },
    clearTypeFilter: (state) => {
      state.filters.type = "all";
    },
  },
});

export const { setLocations, filterType, clearTypeFilter } =
  locationsSlice.actions;
export default locationsSlice.reducer;
