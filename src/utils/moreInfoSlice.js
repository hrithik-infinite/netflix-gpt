import { createSlice } from "@reduxjs/toolkit";

const moreInfoSlice = createSlice({
  name: "moreInfo",
  initialState: {
    showMoreInfo: false,
    moreInfoData: null,
  },
  reducers: {
    toggleMoreInfo: (state) => {
      state.showMoreInfo = !state.showMoreInfo;
    },
    addMoreInfoData: (state, action) => {
      state.moreInfoData = action.payload;
    },
  },
});
export const { addMoreInfoData, toggleMoreInfo } = moreInfoSlice.actions;
export default moreInfoSlice.reducer;
