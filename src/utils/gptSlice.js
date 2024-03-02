import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGPTSearch: false,
    gptRecommended: null,
    movieNames: null,
  },
  reducers: {
    toggleGPTSearchView: (state) => {
      state.showGPTSearch = !state.showGPTSearch;
    },
    addGPTMovieResult: (state, action) => {
      const { tmdbResults, movieNames } = action.payload;
      state.gptRecommended = tmdbResults;
      state.movieNames = movieNames;
    },
  },
});
export const { toggleGPTSearchView, addGPTMovieResult } = gptSlice.actions;
export default gptSlice.reducer;
