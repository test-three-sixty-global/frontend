import { createSlice } from "@reduxjs/toolkit";
import * as emailActionCreator from "../actionsCreator/emailActionCreator";

const authSlice = createSlice({
  name: "email",
  initialState: {
    response: null,
    loading: false,
    postResponse: null,
    status: ""
  },
  reducers: {},
  extraReducers: {
    // Get

    [emailActionCreator.getEmail.pending]: state => {
      state.loading = true;
      state.response = null;
    },
    [emailActionCreator.getEmail.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    [emailActionCreator.getEmail.rejected]: state => {
      state.loading = false;
      state.response = null;
    },

    // Post
    [emailActionCreator.postEmail.pending]: state => {
      state.loading = true;
      state.postResponse = null;
    },
    [emailActionCreator.postEmail.fulfilled]: (state, action) => {
      console.log(action)
      state.loading = false;
      state.postResponse = action.payload;
      state.status = action.payload.status
    },
    [emailActionCreator.postEmail.rejected]: state => {
      state.loading = false;
      state.postResponse = null;
    }
  }
});

export default authSlice.reducer;
