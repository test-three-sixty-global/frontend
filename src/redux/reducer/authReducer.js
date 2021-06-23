import { createSlice } from "@reduxjs/toolkit";
import * as authActionsCreator from "../actionsCreator/authActionsCreator";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    response: null,
    loading: false,
    authed: false
  },
  reducers: {},
  extraReducers: {
    // Login

    [authActionsCreator.login.pending]: state => {
      state.loading = true;
      state.response = null;
      state.authed = false;
    },
    [authActionsCreator.login.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
      state.authed = true;
      localStorage.setItem("token", action.payload.token)
      localStorage.setItem("email", action.payload.email)
    },
    [authActionsCreator.login.rejected]: state => {
      state.loading = false;
      state.response = null;
      state.authed = false;
    },
    [authActionsCreator.logout]: (state, action) => {
        state.loading = false;
        state.authed = false;
        localStorage.removeItem("token")
        localStorage.removeItem("email")
      },
  }
});

export default authSlice.reducer;
