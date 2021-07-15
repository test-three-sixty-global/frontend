import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "src/constants/apiUrl";
import { authHeader } from "../../constants/authHeader";
import { baseUrl } from "../../constants/baseUrl";
import { SuperService } from "../../services/superService";
const Api = new SuperService(baseUrl);

export const getRole = createAsyncThunk("role/get", async (data = {}) => {
  let roleData = {};
  roleData.path = apiUrl.getRole();
  roleData.csrf = authHeader();
  const response = await Api.fetch(roleData);
  return response.data.payload.roleList;
});
