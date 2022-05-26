import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  locations: [],
  filters: {
    type: "all",
    search: "",
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
    search: (state, action) => {
      state.filters.search = action.payload;
    },
    addComment: (state, action) => {
      const { id, rating } = action.payload;

      console.log(rating);

      state.locations = state.locations.map((location) => {
        if (location.id === id) {
          const ratings = [rating, ...location.ratings];

          const ratingScore =
            (location.ratingScore * location.ratings.length + rating.rating) /
            ratings.length;

          return {
            ...location,
            ratings,
            ratingScore,
          };
        }

        return location;
      });
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

export const {
  setLocations,
  filterType,
  clearTypeFilter,
  search,
  addComment,
  setVisited,
} = locationsSlice.actions;
export default locationsSlice.reducer;
