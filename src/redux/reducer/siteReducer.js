import { createSlice } from "@reduxjs/toolkit";
import * as siteActionCreator from "../actionsCreator/siteActionCreator";

const siteSlice = createSlice({
  name: "site",
  initialState: {
    response: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    // getSite

    [siteActionCreator.getSite.pending]: (state) => {
      state.loading = true;
      state.response = null;
    },
    [siteActionCreator.getSite.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    [siteActionCreator.getSite.rejected]: (state) => {
      state.loading = false;
      state.response = null;
    },

    // postSite

    [siteActionCreator.postSite.pending]: (state) => {
      state.loading = true;
      state.response = null;
    },
    [siteActionCreator.postSite.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    [siteActionCreator.postSite.rejected]: (state) => {
      state.loading = false;
      state.response = null;
    },

    // updateSite

    [siteActionCreator.updateSite.pending]: (state) => {
      state.loading = true;
      state.response = null;
    },
    [siteActionCreator.updateSite.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    [siteActionCreator.updateSite.rejected]: (state) => {
      state.loading = false;
      state.response = null;
    },

    // deleteSite

    [siteActionCreator.deleteSite.pending]: (state) => {
      state.loading = true;
      state.response = null;
    },
    [siteActionCreator.deleteSite.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    [siteActionCreator.deleteSite.rejected]: (state) => {
      state.loading = false;
      state.response = null;
    },
  },
});

export default siteSlice.reducer;
