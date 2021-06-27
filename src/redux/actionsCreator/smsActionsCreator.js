import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "src/api-config/api-config";
import { apiUrl } from "src/constants/apiUrl";
import { authHeader } from "../../constants/authHeader";

export const getSms = createAsyncThunk("sms/get", async (data = {}) => {
  let smsData = {};
  smsData.path = apiUrl.getSms();
  smsData.csrf = authHeader();
  const response = await Api.fetch(smsData);
  return response.data.payload.smsAlertList;
});

export const updateSms = createAsyncThunk("sms/update", async (data = {}) => {
  let smsData = {};
  smsData.data = data;
  smsData.path = apiUrl.updateSms(data.id);
  smsData.csrf = authHeader();
  const response = await Api.put(smsData);
  return response.data.payload;
});
export const deleteSms = createAsyncThunk("sms/delete", async (data = {}) => {
  let smsData = {};
  smsData.path = apiUrl.deleteSms(data.id);
  smsData.csrf = authHeader();
  const response = await Api.dell(smsData);
  return response.data.payload;
});
export const postSms = createAsyncThunk("sms/post", async (data = {}) => {
  let smsData = {};
  smsData.path = apiUrl.postSms();
  smsData.csrf = authHeader();
  const response = await Api.post(smsData);
  return response.data.payload;
});
