import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "src/api-config/api-config";
import { apiUrl } from "src/constants/apiUrl";
import { authHeader } from "../../constants/authHeader";

export const getOrganization = createAsyncThunk(
  "organization/get",
  async (data = {}) => {
    let organizationData = {};
    organizationData.path = apiUrl.getOrganization();
    organizationData.csrf = authHeader();
    const response = await Api.fetch(organizationData);
    return response.data.payload.organizationList;
  }
);
export const updateOrganization = createAsyncThunk(
  "organization/update",
  async (data = {}) => {
    let organizationData = {};
    organizationData.data = data;
    organizationData.path = apiUrl.updateOrganization(data.id);
    organizationData.csrf = authHeader();
    const response = await Api.put(organizationData);
    return response.data.payload.organizationList;
  }
);
export const deleteOrganization = createAsyncThunk(
  "organization/delete",
  async (data = {}) => {
    let organizationData = {};
    organizationData.path = apiUrl.updateOrganization(data.id);
    organizationData.csrf = authHeader();
    const response = await Api.dell(organizationData);
    return response.data.payload.organizationList;
  }
);
export const postOrganization = createAsyncThunk(
  "organization/post",
  async (data = {}) => {
    let organizationData = {};
    organizationData.data = data;
    organizationData.path = apiUrl.getOrganization();
    organizationData.csrf = authHeader();
    const response = await Api.post(organizationData);
    return response.data.payload.organizationList;
  }
);
export const uploadOrganizationFile = createAsyncThunk(
  "organization/uploadFile",
  async (data = {}) => {
    let organizationData = {};
    organizationData.data = data;
    organizationData.path = apiUrl.uploadOrganizationFile();
    organizationData.csrf = authHeader();
    const response = await Api.post(organizationData);
    return response.data.payload.organizationList;
  }
);