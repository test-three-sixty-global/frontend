import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "src/api-config/api-config";
import { apiUrl } from "src/constants/apiUrl";
import { authHeader } from "../../constants/authHeader";

export const getUser = createAsyncThunk("user/get", async (data = {}) => {
  let userData = {};
  userData.path = apiUrl.getUser();
  userData.csrf = authHeader();
  const response = await Api.fetch(userData);
  return response.data.payload;
});
export const updateUser = createAsyncThunk("user/update", async (data = {}) => {
  let userData = {};
  userData.data = data;
  userData.path = apiUrl.updateUser(data.id);
  userData.csrf = authHeader();
  const response = await Api.put(userData);
  return response.data.payload;
});
export const deleteUser = createAsyncThunk("user/delete", async (data = {}) => {
  let userData = {};
  userData.path = apiUrl.deleteUser(data.id);
  userData.csrf = authHeader();
  const response = await Api.dell(userData);
  return response.data.payload;
});
export const postUser = createAsyncThunk("user/post", async (data = {}) => {
  let userData = {};
  userData.path = apiUrl.postUser();
  userData.csrf = authHeader();
  const response = await Api.post(userData);
  return response.data.payload;
});