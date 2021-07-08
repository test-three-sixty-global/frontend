import { createSlice } from "@reduxjs/toolkit";
import * as organizationActionCreator from "../actionsCreator/organizationActionCreator";

const organizationSlice = createSlice({
  name: "organzation",
  initialState: {
    response: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    // getOrganization

    [organizationActionCreator.getOrganization.pending]: (state) => {
      state.loading = true;
      state.response = null;
    },
    [organizationActionCreator.getOrganization.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    [organizationActionCreator.getOrganization.rejected]: (state) => {
      state.loading = false;
      state.response = null;
    },

    // postOrganization

    [organizationActionCreator.postOrganization.pending]: (state) => {
      state.loading = true;
      state.response = null;
    },
    [organizationActionCreator.postOrganization.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    [organizationActionCreator.postOrganization.rejected]: (state) => {
      state.loading = false;
      state.response = null;
    },

    // updateOrganization

    [organizationActionCreator.updateOrganization.pending]: (state) => {
      state.loading = true;
      state.response = null;
    },
    [organizationActionCreator.updateOrganization.fulfilled]: (
      state,
      action
    ) => {
      console.log(action.payload.organizationList);
      state.loading = false;
      state.response = action.payload.organizationList;
    },
    [organizationActionCreator.updateOrganization.rejected]: (state) => {
      state.loading = false;
      state.response = null;
    },

    // deleteOrganization

    [organizationActionCreator.deleteOrganization.pending]: (state) => {
      state.loading = true;
      state.response = null;
    },
    [organizationActionCreator.deleteOrganization.fulfilled]: (
      state,
      action
    ) => {
      state.loading = false;
      state.response = action.payload.organizationList;
    },
    [organizationActionCreator.deleteOrganization.rejected]: (state) => {
      state.loading = false;
      state.response = null;
    },

    // uploadFileOrganization

    [organizationActionCreator.uploadOrganizationFile.pending]: (state) => {
      state.loading = true;
      state.response = null;
    },
    [organizationActionCreator.uploadOrganizationFile.fulfilled]: (
      state,
      action
    ) => {
      state.loading = false;
      state.response = action.payload;
    },
    [organizationActionCreator.uploadOrganizationFile.rejected]: (state) => {
      state.loading = false;
      state.response = null;
    },
  },
});

export default organizationSlice.reducer;
