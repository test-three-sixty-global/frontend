import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "src/constants/apiUrl";
import { authHeader } from "../../constants/authHeader";
import { baseUrl } from "../../constants/baseUrl";
import { SuperService } from "../../services/superService";

const Api = new SuperService(baseUrl);

export const getOrganization = createAsyncThunk(
  "organization/get",
  async (data = {}) => {
    let organizationData = {};
    organizationData.path = apiUrl.getOrganization();
    organizationData.csrf = authHeader();
    const response = await Api.fetch(organizationData);
    return response.data.payload;
  }
);
export const updateOrganization = createAsyncThunk(
  "organization/update",
  async (data = {}) => {
    let organizationData = {};
    organizationData.data = {
      organizationName: data.data.organizationName,
      adminUserEmail: data.data.adminUserEmail,
    };
    organizationData.path = apiUrl.updateOrganization(data.data.organizationId);
    organizationData.csrf = authHeader();
    const response = await Api.put(organizationData);
    return {
      response: response.data.payload.organizationList,
      organizationList: data.organizationList,
    };
  }
);

export const deleteOrganization = createAsyncThunk(
  "organization/delete",
  async (data = {}) => {
    let organizationData = {};
    console.log(data);
    organizationData.path = apiUrl.deleteOrganization(data.item.organizationId);
    organizationData.csrf = authHeader();
    const response = await Api.dell(organizationData);
    return {
      response: response.data.payload.organizationList,
      organizationList: data.organizationList,
    };
  }
);

export const postOrganization = createAsyncThunk(
  "organization/post",
  async (data = {}) => {
    console.log(data);

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
