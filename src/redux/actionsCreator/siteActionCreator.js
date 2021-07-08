import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "src/api-config/api-config";
import { apiUrl } from "src/constants/apiUrl";
import { authHeader } from "../../constants/authHeader";

export const getSite = createAsyncThunk("site/get", async (data = {}) => {
  let siteData = {};
  siteData.data = data;
  siteData.path = apiUrl.getSite();
  siteData.csrf = authHeader();
  const response = await Api.post(siteData);
  return response.data.payload;
});
export const postSite = createAsyncThunk("site/post", async (data = {}) => {
  let siteData = {};
  siteData.data = data;
  siteData.path = apiUrl.postSite();
  siteData.csrf = authHeader();
  const response = await Api.post(siteData);
  return response.data.payload;
});
export const updateSite = createAsyncThunk("site/update", async (data = {}) => {
  console.log(data);
  let siteData = {};
  siteData.data = data.data;
  siteData.path = apiUrl.updateSite(data.data.siteId);
  siteData.csrf = authHeader();
  const response = await Api.put(siteData);
  return { response: response.data, siteList: data.siteList };
});
export const deleteSite = createAsyncThunk("site/delete", async (data = {}) => {
  let siteData = {};
  console.log(data);
  siteData.path = apiUrl.deleteSite(data.item.siteId);
  siteData.csrf = authHeader();
  const response = await Api.dell(siteData);
  return { response: response.data, siteList: data.siteList };
});

export const getSiteInitialData = createAsyncThunk(
  "site/getSiteInitialData",
  async (data = {}) => {
    let siteData = {};
    console.log(data);
    siteData.path = apiUrl.getsiteInitialData();
    siteData.csrf = authHeader();
    const response = await Api.fetch(siteData);
    return response.data;
  }
);
