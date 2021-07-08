import { createSlice } from "@reduxjs/toolkit";
import * as smsActionsCreator from "../actionsCreator/smsActionsCreator";

const smsSlice = createSlice({
  name: "sms",
  initialState: {
    response: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    //getSms

    [smsActionsCreator.getSms.pending]: (state) => {
      state.loading = true;
      state.response = null;
    },
    [smsActionsCreator.getSms.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    [smsActionsCreator.getSms.rejected]: (state) => {
      state.loading = false;
      state.response = null;
    },

    //post Sms
    [smsActionsCreator.postSms.pending]: (state) => {
      state.loading = true;
      state.response = null;
    },
    [smsActionsCreator.postSms.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    [smsActionsCreator.postSms.rejected]: (state) => {
      state.loading = false;
      state.response = null;
    },

    //updateSms

    [smsActionsCreator.updateSms.pending]: (state) => {
      state.loading = true;
      state.response = null;
    },
    [smsActionsCreator.updateSms.fulfilled]: (state, action) => {
      console.log(action.payload)
      state.loading = false;
      state.response = action.payload.smsList;
    },
    [smsActionsCreator.updateSms.rejected]: (state) => {
      state.loading = false;
      state.response = null;
    },

    //delete sms

    [smsActionsCreator.deleteSms.pending]: (state) => {
      state.loading = true;
      state.response = null;
    },
    [smsActionsCreator.deleteSms.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload.smsList;
    },
    [smsActionsCreator.deleteSms.rejected]: (state) => {
      state.loading = false;
      state.response = null;
    },
  },
});

export default smsSlice.reducer;
