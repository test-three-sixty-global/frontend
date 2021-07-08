import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../services/httpService";
import { apiUrl } from "src/constants/apiUrl";
import { authHeader } from "../../constants/authHeader";

export const getRole = createAsyncThunk("role/get", async (data = {}) => {
  let roleData = {};
  roleData.path = apiUrl.getRole();
  roleData.csrf = authHeader();
  const response = await Api.fetch(roleData);
  return response.data.payload.roleList;
});
