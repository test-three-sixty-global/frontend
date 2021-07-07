import { createSlice } from "@reduxjs/toolkit";
import * as groupActionCreator from "../actionsCreator/groupActionCreator";

const groupSlice = createSlice({
  name: "group",
  initialState: {
    response: null,
    loading: false,
    status: "",
    responsePost: null
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

  },
});

export default groupSlice.reducer;
