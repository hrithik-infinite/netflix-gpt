import { createSlice } from "@reduxjs/toolkit";

const moreInfoSlice = createSlice({
  name: "moreInfo",
  initialState: {
    showMoreInfo: false,
    moreInfoData: null,
    completeData: null,
  },
  reducers: {
    toggleMoreInfo: (state) => {
      state.showMoreInfo = !state.showMoreInfo;
    },
    addMoreInfoData: (state, action) => {
      state.moreInfoData = action.payload;
    },
    movieData: (state, action) => {
      state.completeData = action.payload;
    },
  },
});
export const { addMoreInfoData, toggleMoreInfo, movieData } =
  moreInfoSlice.actions;
export default moreInfoSlice.reducer;
