import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "src/api-config/api-config";
import { apiUrl } from "src/constants/apiUrl";
import { authHeader } from "../../constants/authHeader"

export const getOrganization = createAsyncThunk("organization/get", async (data = {}) => {
  let organizationData = {};
  organizationData.path = apiUrl.getOrganization();
  organizationData.csrf = authHeader()
  const response = await Api.fetch(organizationData);
  return response.data.payload.organizationList;
});
