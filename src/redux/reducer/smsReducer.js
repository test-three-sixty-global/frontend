import { createSlice } from "@reduxjs/toolkit";
import * as smsActionsCreator from "../actionsCreator/smsActionsCreator";

const authSlice = createSlice({
  name: "sms",
  initialState: {
    response: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    // Login

    [smsActionsCreator.getSms.pending]: state => {
      state.loading = true;
      state.response = null;
    },
    [smsActionsCreator.getSms.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    [smsActionsCreator.getSms.rejected]: state => {
      state.loading = false;
      state.response = null;
    }
  }
});

export default authSlice.reducer;
