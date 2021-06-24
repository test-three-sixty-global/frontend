import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "src/api-config/api-config";
import { apiUrl } from "src/constants/apiUrl";
import { authHeader } from "../../constants/authHeader"

export const getSite = createAsyncThunk("site/get", async (data = {}) => {
  let siteData = {};
  siteData.path = apiUrl.getSite();
  siteData.csrf = authHeader()
  const response = await Api.fetch(siteData);
  return response.data.payload.siteList;
});
