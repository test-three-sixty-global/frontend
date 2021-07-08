import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "src/api-config/api-config";
import { apiUrl } from "src/constants/apiUrl";
import { authHeader } from "../../constants/authHeader";

export const getGroupInitialData = createAsyncThunk("group/getInitial", async (data = {}) => {
  let groupInitialData = {};
  groupInitialData.path = apiUrl.getGroupInitialData();
  groupInitialData.csrf = authHeader();
  const response = await Api.fetch(groupInitialData);
  return response.data.payload;
});
export const postGroup = createAsyncThunk("group/post", async (data = {}) => {
    let groupData = {};
    groupData.data = data;
    groupData.path = apiUrl.postGroup();
    groupData.csrf = authHeader();
    const response = await Api.post(groupData);
    return response.data.payload;
  });
export const postGroupList = createAsyncThunk("groupList/post", async (data = {}) => {
    let groupListData = {};
    groupListData.data = data;
    groupListData.path = apiUrl.postGroupList();
    groupListData.csrf = authHeader();
    const response = await Api.post(groupListData);
    return response.data.payload;
  });
export const updateGroup = createAsyncThunk("group/update", async (data = {}, id) => {
    let groupData = {};
    groupData.data = data.formValues;
    groupData.path = apiUrl.updateGroup(data.id);
    groupData.csrf = authHeader();
    const response = await Api.post(groupData);
    return response.data.payload;
  });
