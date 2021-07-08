import { createSlice } from "@reduxjs/toolkit";
import * as groupActionCreator from "../actionsCreator/groupActionCreator";

const groupSlice = createSlice({
  name: "group",
  initialState: {
    response: null,
    loading: false,
    status: "",
    responsePost: null,
    GroupTestCases: null,
    groupTestSteps: null,
    alltestCases: null,
  },
  reducers: {},
  extraReducers: {
    // getGroup

    [groupActionCreator.getGroupInitialData.pending]: (state) => {
      state.loading = true;
      state.response = null;
    },
    [groupActionCreator.getGroupInitialData.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    [groupActionCreator.getGroupInitialData.rejected]: (state) => {
      state.loading = false;
      state.response = null;
    },

    // postGroup
    [groupActionCreator.postGroup.pending]: (state) => {
      state.loading = true;
      state.responsePost = null;
    },
    [groupActionCreator.postGroup.fulfilled]: (state, action) => {
      state.loading = false;
      state.responsePost = action.payload;
      // state.status = action.payload.status
    },
    [groupActionCreator.postGroup.rejected]: (state) => {
      state.loading = false;
      state.responsePost = null;
    },

    // postGroupList
    [groupActionCreator.postGroupList.pending]: (state) => {
      state.loading = true;
      state.responsePost = null;
    },
    [groupActionCreator.postGroupList.fulfilled]: (state, action) => {
      state.loading = false;
      state.responsePost = action.payload;
      // state.status = action.payload.status
    },
    [groupActionCreator.postGroupList.rejected]: (state) => {
      state.loading = false;
      state.responsePost = null;
    },

    // updateGroupList
    [groupActionCreator.updateGroup.pending]: (state) => {
      state.loading = true;
      state.responsePost = null;
    },
    [groupActionCreator.updateGroup.fulfilled]: (state, action) => {
      state.loading = false;
      state.responsePost = action.payload;
      // state.status = action.payload.status
    },
    [groupActionCreator.updateGroup.rejected]: (state) => {
      state.loading = false;
      state.responsePost = null;
    },

    // get group test cases
    [groupActionCreator.getGroupTestCases.pending]: (state) => {
      state.loading = true;
      state.GroupTestCases = null;
    },
    [groupActionCreator.getGroupTestCases.fulfilled]: (state, action) => {
      state.loading = false;
      state.GroupTestCases = action.payload;
      // state.status = action.payload.status
    },
    [groupActionCreator.getGroupTestCases.rejected]: (state) => {
      state.loading = false;
      state.GroupTestCases = null;
    },

    // get group test step
    [groupActionCreator.getGroupTestSteps.pending]: (state) => {
      state.loading = true;
      state.groupTestSteps = null;
    },
    [groupActionCreator.getGroupTestSteps.fulfilled]: (state, action) => {
      state.loading = false;
      state.groupTestSteps = action.payload;
      // state.status = action.payload.status
    },
    [groupActionCreator.getGroupTestSteps.rejected]: (state) => {
      state.loading = false;
      state.groupTestSteps = null;
    },

    // get group test step
    [groupActionCreator.getAllTestCases.pending]: (state) => {
      state.loading = true;
      state.alltestCases = null;
    },
    [groupActionCreator.getAllTestCases.fulfilled]: (state, action) => {
      state.loading = false;
      state.alltestCases = action.payload;
      // state.status = action.payload.status
    },
    [groupActionCreator.getAllTestCases.rejected]: (state) => {
      state.loading = false;
      state.alltestCases = null;
    },
  },
});

export default groupSlice.reducer;
