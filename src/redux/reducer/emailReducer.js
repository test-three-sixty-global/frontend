import { createSlice } from "@reduxjs/toolkit";
import * as emailActionCreator from "../actionsCreator/emailActionCreator";

const authSlice = createSlice({
  name: "email",
  initialState: {
    response: null,
    loading: false,
    postResponse: null,
    status: "",
  },
  reducers: {},
  extraReducers: {
    // Get

    [emailActionCreator.getEmail.pending]: (state) => {
      state.loading = true;
      state.response = null;
    },
    [emailActionCreator.getEmail.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    [emailActionCreator.getEmail.rejected]: (state) => {
      state.loading = false;
      state.response = null;
    },

    // Post
    [emailActionCreator.postEmail.pending]: (state) => {
      state.loading = true;
      state.postResponse = null;
    },
    [emailActionCreator.postEmail.fulfilled]: (state, action) => {
      console.log(action);
      state.loading = false;
      state.postResponse = action.payload;
      state.status = action.payload?.status;
    },
    [emailActionCreator.postEmail.rejected]: (state) => {
      state.loading = false;
      state.postResponse = null;
    },

    // delete
    [emailActionCreator.deleteEmail.pending]: (state) => {
      state.loading = true;
      state.response = null;
    },
    [emailActionCreator.deleteEmail.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload.emailList;
    },
    [emailActionCreator.deleteEmail.rejected]: (state) => {
      state.loading = false;
      state.response = null;
    },

    // update
    [emailActionCreator.updateEmail.pending]: (state) => {
      state.loading = true;
      state.response = null;
    },
    [emailActionCreator.updateEmail.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload.emailList;
    },
    [emailActionCreator.updateEmail.rejected]: (state) => {
      state.loading = false;
      state.response = null;
    },
  },
});

export default authSlice.reducer;
