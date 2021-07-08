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

  return response.data.payload;
});
export const updateEmail = createAsyncThunk(
  "email/update",
  async (data = {}) => {
    let emailData = {};
    emailData.path = apiUrl.updateEmail(data.data.emailListId);
    emailData.data = data.data;
    emailData.csrf = authHeader();
    const response = await Api.put(emailData);
    return { response: response.data.payload, emailList: data.emailList };
  }
);
export const deleteEmail = createAsyncThunk(
  "email/delete",
  async (data = {}) => {
    let emailData = {};
    emailData.path = apiUrl.deleteEmail(data.id);
    emailData.data = data;
    emailData.csrf = authHeader();
    const response = await Api.dell(emailData);
    return { response: response.data.payload, emailList: data.emailList };
  }
);
