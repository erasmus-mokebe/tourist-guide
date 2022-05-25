import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locations: [],
};

export const locationsSlice = createSlice({
  name: "locations",
  initialState,
  reducers: {
    setLocations: (state, action) => {
      state.locations = action.payload;
    },
    setVisited: (state, action) => {
      const location = state.locations.find(
        (location) => location.id == action.payload.id
      );
      if (!location) {
        return;
      }
      location.visited = action.payload.visited;
    },
  },
});

export const { setLocations, setVisited } = locationsSlice.actions;
export default locationsSlice.reducer;
