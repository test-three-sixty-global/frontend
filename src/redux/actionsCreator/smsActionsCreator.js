import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "src/api-config/api-config";
import { apiUrl } from "src/constants/apiUrl";
import { authHeader } from "../../constants/authHeader"

export const getSms = createAsyncThunk("sms/get", async (data = {}) => {
  let smsData = {};
  smsData.path = apiUrl.getSms();
  smsData.csrf = authHeader()
  const response = await Api.fetch(smsData);
  return response.data.payload.smsAlertList;
});
