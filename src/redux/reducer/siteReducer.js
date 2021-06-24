import { createSlice } from "@reduxjs/toolkit";
import * as siteActionCreator from "../actionsCreator/siteActionCreator";

const authSlice = createSlice({
  name: "site",
  initialState: {
    response: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    // Login

    [siteActionCreator.getSite.pending]: state => {
      state.loading = true;
      state.response = null;
    },
    [siteActionCreator.getSite.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    [siteActionCreator.getSite.rejected]: state => {
      state.loading = false;
      state.response = null;
    }
  }
});

export default authSlice.reducer;
