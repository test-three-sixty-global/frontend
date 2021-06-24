import { createSlice } from "@reduxjs/toolkit";
import * as organizationActionCreator from "../actionsCreator/organizationActionCreator";

const authSlice = createSlice({
  name: "organzation",
  initialState: {
    response: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    // Login

    [organizationActionCreator.getOrganization.pending]: state => {
      state.loading = true;
      state.response = null;
    },
    [organizationActionCreator.getOrganization.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    [organizationActionCreator.getOrganization.rejected]: state => {
      state.loading = false;
      state.response = null;
    }
  }
});

export default authSlice.reducer;
