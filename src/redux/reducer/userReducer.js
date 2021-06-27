import { createSlice } from "@reduxjs/toolkit";
import * as userActionsCreator from "../actionsCreator/userActionsCreator";

const UserSlice = createSlice({
  name: "user",
  initialState: {
    response: null,
    loading: false,
  },
  reducers: {},
  extraReducers: {
    //getUser

    [userActionsCreator.getUser.pending]: (state) => {
      state.loading = true;
      state.response = null;
    },
    [userActionsCreator.getUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    [userActionsCreator.getUser.rejected]: (state) => {
      state.loading = false;
      state.response = null;
    },

    //post User
    [userActionsCreator.postUser.pending]: (state) => {
      state.loading = true;
      state.response = null;
    },
    [userActionsCreator.postUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    [userActionsCreator.postUser.rejected]: (state) => {
      state.loading = false;
      state.response = null;
    },

    //updateUser

    [userActionsCreator.updateUser.pending]: (state) => {
      state.loading = true;
      state.response = null;
    },
    [userActionsCreator.updateUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    [userActionsCreator.updateUser.rejected]: (state) => {
      state.loading = false;
      state.response = null;
    },

    //delete User

    [userActionsCreator.deleteUser.pending]: (state) => {
      state.loading = true;
      state.response = null;
    },
    [userActionsCreator.deleteUser.fulfilled]: (state, action) => {
      state.loading = false;
      state.response = action.payload;
    },
    [userActionsCreator.deleteUser.rejected]: (state) => {
      state.loading = false;
      state.response = null;
    },
  },
});

export default UserSlice.reducer;
