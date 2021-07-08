import { createSlice } from "@reduxjs/toolkit";
import * as siteActionCreator from "../actionsCreator/siteActionCreator";

const siteSlice = createSlice({
  name: "site",
  initialState: {
    response: null,
    loading: false,
    status: "",
    siteInitialData: null,
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
      state.response = action.payload.siteList;
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
      state.response = action.payload.siteList;
    },
    [siteActionCreator.deleteSite.rejected]: (state) => {
      state.loading = false;
      state.response = null;
    },

    // get siteInitialData

    [siteActionCreator.getSiteInitialData.pending]: (state) => {
      state.loading = true;
      state.siteInitialData = null;
    },
    [siteActionCreator.getSiteInitialData.fulfilled]: (state, action) => {
      state.loading = false;
      state.siteInitialData = action.payload.payload;
    },
    [siteActionCreator.getSiteInitialData.rejected]: (state) => {
      state.loading = false;
      state.siteInitialData = null;
    },
  },
});

export default siteSlice.reducer;
