import { createSlice } from "@reduxjs/toolkit";
import * as groupActionCreator from "../actionsCreator/groupActionCreator";

const groupSlice = createSlice({
  name: "group",
  initialState: {
    response: null,
    loading: false,
    status: "",
    responsePost: null,
    updateResponse: null,
    GroupTestCases: null,
    groupTestSteps: null,
    alltestCases: null,
    postGroup: null,
    postGroupStatus: "",
    getAllGroups: null,
    cloneTest: null,
    projectGroupImediatelyPlayStatus: null,
    testcaseImediatelyPlayStatus: null,
    testCasefreqResponse: null,
    testCasefreqError: null,
    testCaseExecResponse: null,
    testCaseExecError: null,
    testCaseScreenshotResponse: null,
    testCaseScreenshotError: null,
    downloadTest: null,
    downloadTestError: null,
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
      state.postGroup = null;
    },
    [groupActionCreator.postGroup.fulfilled]: (state, action) => {
      state.loading = false;
      state.postGroup = action.payload;
      state.postGroupStatus = action.payload.status;
    },
    [groupActionCreator.postGroup.rejected]: (state) => {
      state.loading = false;
      state.postGroup = null;
    },

    // postGroupList
    [groupActionCreator.postGroupList.pending]: (state) => {
      state.loading = true;
      // state.responsePost = null;
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
      // state.responsePost = null;
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
    // updateGroupScreenshot
    [groupActionCreator.updateGroupScreenshot.pending]: (state) => {
      state.loading = true;
      state.updateResponse = null;
    },
    [groupActionCreator.updateGroupScreenshot.fulfilled]: (state, action) => {
      state.loading = false;
      state.updateResponse = action.payload;
      // state.status = action.payload.status
    },
    [groupActionCreator.updateGroupScreenshot.rejected]: (state) => {
      state.loading = false;
      state.updateResponse = null;
    },

    // updateGroupExec
    [groupActionCreator.updateGroupExec.pending]: (state) => {
      state.loading = false;
      state.updateResponse = null;
    },
    [groupActionCreator.updateGroupExec.fulfilled]: (state, action) => {
      state.loading = false;
      state.updateResponse = action.payload;
      // state.status = action.payload.status
    },
    [groupActionCreator.updateGroupExec.rejected]: (state) => {
      state.loading = false;
      state.updateResponse = null;
    },

    // updateGroupFrequency
    [groupActionCreator.updateGroupFrequency.pending]: (state) => {
      state.loading = false;
      state.updateResponse = null;
    },
    [groupActionCreator.updateGroupFrequency.fulfilled]: (state, action) => {
      state.loading = false;
      state.updateResponse = action.payload;
      // state.status = action.payload.status
    },
    [groupActionCreator.updateGroupFrequency.rejected]: (state) => {
      state.loading = false;
      state.updateResponse = null;
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
      // state.GroupTestCases = null;
    },
    [groupActionCreator.getGroupTestCases.fulfilled]: (state, action) => {
      console.log(action);
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
    },
    [groupActionCreator.getAllTestCases.rejected]: (state) => {
      state.loading = false;
      state.alltestCases = null;
    },

    // get all groups
    [groupActionCreator.getAllGroups.pending]: (state) => {
      state.loading = true;
      state.getAllGroups = null;
    },
    [groupActionCreator.getAllGroups.fulfilled]: (state, action) => {
      state.loading = false;
      state.getAllGroups = action.payload;
      // state.status = action.payload.status
    },
    [groupActionCreator.getAllGroups.rejected]: (state) => {
      state.loading = false;
      state.getAllGroups = null;
    },

    // clone test
    [groupActionCreator.cloneTest.pending]: (state) => {
      state.loading = true;
      state.cloneTest = null;
    },
    [groupActionCreator.cloneTest.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.loading = false;
      state.cloneTest = action.payload;
      // state.status = action.payload.status
    },
    [groupActionCreator.cloneTest.rejected]: (state) => {
      state.loading = false;
      state.cloneTest = null;
    },

    // play all test cases of group imediately

    [groupActionCreator.projectGroupImediatelyPlay.pending]: (
      state,
      action
    ) => {
      state.projectGroupImediatelyPlayStatus = null;
    },
    [groupActionCreator.projectGroupImediatelyPlay.fulfilled]: (
      state,
      action
    ) => {
      state.projectGroupImediatelyPlayStatus = action.payload;
    },
    [groupActionCreator.projectGroupImediatelyPlay.rejected]: (
      state,
      action
    ) => {
      state.projectGroupImediatelyPlayStatus = null;
    },

    // play selected test case of group imediately

    [groupActionCreator.testcaseImediatelyPlay.pending]: (state, action) => {
      state.testcaseImediatelyPlayStatus = null;
    },
    [groupActionCreator.testcaseImediatelyPlay.fulfilled]: (state, action) => {
      state.testcaseImediatelyPlayStatus = action.payload;
    },
    [groupActionCreator.testcaseImediatelyPlay.rejected]: (state, action) => {
      state.testcaseImediatelyPlayStatus = null;
    },

    // update test case execution frequency

    [groupActionCreator.updateTestExecFreq.pending]: (state) => {
      state.loading = false;
      state.testCasefreqResponse = null;
      state.testCasefreqError = null;
    },
    [groupActionCreator.updateTestExecFreq.fulfilled]: (state, action) => {
      state.loading = false;
      state.testCasefreqResponse = action.payload;
      state.testCasefreqError = null;
    },
    [groupActionCreator.updateTestExecFreq.rejected]: (state, action) => {
      state.loading = false;
      state.testCasefreqResponse = null;
      state.testCasefreqError = action.payload;
    },

    // update test case screenshot

    [groupActionCreator.updateTestcaseScreenshot.pending]: (state) => {
      state.loading = false;
      state.testCaseScreenshotResponse = null;
      state.testCaseScreenshotError = null;
    },
    [groupActionCreator.updateTestcaseScreenshot.fulfilled]: (
      state,
      action
    ) => {
      state.loading = false;
      state.testCaseScreenshotResponse = action.payload;
      state.testCaseScreenshotError = null;
    },
    [groupActionCreator.updateTestcaseScreenshot.rejected]: (state, action) => {
      state.loading = false;
      state.testCaseScreenshotResponse = null;
      state.testCaseScreenshotError = action.payload;
    },

    // update test case screenshot

    [groupActionCreator.updateTestExec.pending]: (state) => {
      state.testCaseExecResponse = null;
      state.testCaseExecError = null;
    },
    [groupActionCreator.updateTestExec.fulfilled]: (state, action) => {
      state.testCaseExecResponse = action.payload;
      state.testCaseExecError = null;
    },
    [groupActionCreator.updateTestExec.rejected]: (state, action) => {
      state.testCaseExecResponse = null;
      state.testCaseExecError = action.payload;
    },

    // downlaod test

    [groupActionCreator.downloadTest.pending]: (state) => {
      state.downloadTest = null;
      state.downloadTestError = null;
    },
    [groupActionCreator.downloadTest.fulfilled]: (state, action) => {
      state.downloadTest = action.payload;
      state.downloadTestError = null;
    },
    [groupActionCreator.downloadTest.rejected]: (state, action) => {
      state.downloadTest = null;
      state.downloadTestError = action.payload;
    },
  },
});

export default groupSlice.reducer;
