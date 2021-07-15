import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "src/constants/apiUrl";
import { baseUrl } from "../../constants/baseUrl";
import { SuperService } from "../../services/superService";

const Api = new SuperService(baseUrl);

export const login = createAsyncThunk("auth/login", async (data = {}) => {
  let loginData = {};
  loginData.data = data;
  loginData.path = apiUrl.login();
  const response = await Api.post(loginData);
  return response.data.payload;
});

export const logout = createAction("auth/logout");
