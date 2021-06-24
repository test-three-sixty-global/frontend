import { createSlice } from "@reduxjs/toolkit";
import * as roleActionCreator from "../actionsCreator/roleActionCreator";

const authSlice = createSlice({
  name: "role",
  initialState: {
    response: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    // Login

    [roleActionCreator.getRole.pending]: state => {
      state.loading = true;
      state.response = null;
    },
    [roleActionCreator.getRole.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    [roleActionCreator.getRole.rejected]: state => {
      state.loading = false;
      state.response = null;
    }
  }
});

export default authSlice.reducer;
