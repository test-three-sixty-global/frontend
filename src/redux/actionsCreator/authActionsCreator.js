import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "src/api-config/api-config";
import { apiUrl } from "src/constants/apiUrl";

export const login = createAsyncThunk("auth/login", async (data = {}) => {
  let loginData = {};
  loginData.data = data;
  loginData.path = apiUrl.login();
  const response = await Api.post(loginData);
  return response.data.payload;
});

export const logout = createAction('auth/logout')