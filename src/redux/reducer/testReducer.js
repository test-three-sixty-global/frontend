import { createSlice } from "@reduxjs/toolkit";
import * as testActionCreator from "../actionsCreator/testActionCreator";

const groupSlice = createSlice({
  name: "group",
  initialState: {
    response: null,
    loading: false,
    status: "",
    responsePost: null,
    updateResponse: null,
    responseCreate: null
  },
  reducers: {},
  extraReducers: {
    // postTestList
    [testActionCreator.postTestList.pending]: state => {
      state.loading = true;
      state.responsePost = null;
    },
    [testActionCreator.postTestList.fulfilled]: (state, action) => {
      state.loading = false;
      state.responsePost = action.payload;
      // state.status = action.payload.status
    },
    [testActionCreator.postTestList.rejected]: state => {
      state.loading = false;
      state.responsePost = null;
    },

    // postTest
    [testActionCreator.postTest.pending]: state => {
      state.loading = true;
      state.responseCreate = null;
    },
    [testActionCreator.postTest.fulfilled]: (state, action) => {
      state.loading = false;
      state.responseCreate = action.payload;
      // state.status = action.payload.status
    },
    [testActionCreator.postTest.rejected]: state => {
      state.loading = false;
      state.responseCreate = null;
    },

    // updateGroupFrequency
    [testActionCreator.updateTestExec.pending]: state => {
      state.loading = true;
      state.updateResponse = null;
    },
    [testActionCreator.updateTestExec.fulfilled]: (state, action) => {
      state.loading = false;
      state.updateResponse = action.payload;
      // state.status = action.payload.status
    },
    [testActionCreator.updateTestExec.rejected]: state => {
      state.loading = false;
      state.updateResponse = null;
    },
    // updateGroupFrequency
    [testActionCreator.updateTestScreenshot.pending]: state => {
      state.loading = true;
      state.updateResponse = null;
    },
    [testActionCreator.updateTestScreenshot.fulfilled]: (state, action) => {
      state.loading = false;
      state.updateResponse = action.payload;
      // state.status = action.payload.status
    },
    [testActionCreator.updateTestScreenshot.rejected]: state => {
      state.loading = false;
      state.updateResponse = null;
    }
  }
});

export default groupSlice.reducer;
