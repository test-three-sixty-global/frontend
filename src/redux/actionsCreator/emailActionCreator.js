import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "src/api-config/api-config";
import { apiUrl } from "src/constants/apiUrl";
import { authHeader } from "../../constants/authHeader";

export const getEmail = createAsyncThunk("email/get", async (data = {}) => {
  let emailData = {};
  emailData.data = data;
  emailData.path = apiUrl.getEmail();
  emailData.csrf = authHeader();
  const response = await Api.post(emailData);
  return response.data.payload;
});

export const postEmail = createAsyncThunk("email/post", async (data = {}) => {
  let emailData = {};
  emailData.path = apiUrl.postEmail();
  emailData.data = data;
  emailData.csrf = authHeader();
  const response = await Api.post(emailData);
  return response.data.payload.emailList;
});
export const updateEmail = createAsyncThunk("email/post", async (data = {}) => {
  let emailData = {};
  emailData.path = apiUrl.postEmail();
  emailData.data = data;
  emailData.csrf = authHeader();
  const response = await Api.post(emailData);
  return response.data.payload.emailList;
});
