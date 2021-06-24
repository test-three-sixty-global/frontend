import { createSlice } from "@reduxjs/toolkit";
import * as emailActionCreator from "../actionsCreator/emailActionCreator";

const authSlice = createSlice({
  name: "email",
  initialState: {
    response: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    // Login

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
    }
  }
});

export default authSlice.reducer;
