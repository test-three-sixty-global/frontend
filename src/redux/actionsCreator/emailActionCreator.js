import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "src/api-config/api-config";
import { apiUrl } from "src/constants/apiUrl";
import { authHeader } from "../../constants/authHeader"

export const getEmail = createAsyncThunk("email/get", async (data = {}) => {
  let emailData = {};
  emailData.path = apiUrl.getEmail();
  emailData.csrf = authHeader()
  const response = await Api.fetch(emailData);
  return response.data.payload.emailList;
});
