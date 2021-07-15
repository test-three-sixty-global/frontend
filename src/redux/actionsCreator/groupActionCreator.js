import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import Api from "../../services/httpService";
import { apiUrl } from "src/constants/apiUrl";
import { authHeader } from "../../constants/authHeader";

export const getGroupInitialData = createAsyncThunk(
  "group/getInitial",
  async (data = {}) => {
    let groupInitialData = {};
    groupInitialData.path = apiUrl.getGroupInitialData();
    groupInitialData.csrf = authHeader();
    const response = await Api.fetch(groupInitialData);
    return response.data.payload;
  }
);
export const postGroup = createAsyncThunk("group/post", async (data = {}) => {
  let groupData = {};
  groupData.data = data;
  groupData.path = apiUrl.postGroup();
  groupData.csrf = authHeader();
  const response = await Api.post(groupData);
  return response.data;
});
export const postGroupList = createAsyncThunk(
  "groupList/post",
  async (data = {}) => {
    let groupListData = {};
    groupListData.data = data;
    groupListData.path = apiUrl.postGroupList();
    groupListData.csrf = authHeader();
    const response = await Api.post(groupListData);
    return response.data.payload;
  }
);
export const updateGroup = createAsyncThunk(
  "group/update",
  async (data = {}, id) => {
    let groupData = {};
    groupData.data = data.formValues;
    groupData.path = apiUrl.updateGroup(data.id);
    groupData.csrf = authHeader();
    const response = await Api.put(groupData);
    return response.data.payload;
  }
);
export const updateGroupScreenshot = createAsyncThunk(
  "groupScreenshot/put",
  async (data = {}) => {
    let groupScreenshotData = {};
    groupScreenshotData.data = data.data;
    groupScreenshotData.path = apiUrl.updateGroupScreenshot(data.id);
    groupScreenshotData.csrf = authHeader();
    const response = await Api.put(groupScreenshotData);
    return response.data.payload;
  }
);
export const updateGroupExec = createAsyncThunk(
  "groupExec/put",
  async (data = {}) => {
    let groupExecData = {};
    groupExecData.data = data.data;
    groupExecData.path = apiUrl.updateGroupExec(data.id);
    groupExecData.csrf = authHeader();
    const response = await Api.put(groupExecData);
    return response.data.payload;
  }
);
export const updateGroupFrequency = createAsyncThunk(
  "groupFrequency/put",
  async (data = {}) => {
    let groupFrequencyData = {};
    groupFrequencyData.data = data.data;
    groupFrequencyData.path = apiUrl.updateGroupFrequency(data.id);
    groupFrequencyData.csrf = authHeader();
    const response = await Api.put(groupFrequencyData);
    return response.data.payload;
  }
);

//get test cases
export const getGroupTestCases = createAsyncThunk(
  "group/groupTestCases",
  async (data = {}) => {
    let groupInitialData = {};
    groupInitialData.path = apiUrl.getGroupTestCases(data);
    groupInitialData.csrf = authHeader();
    const response = await Api.fetch(groupInitialData);
    return response.data.payload;
  }
);

//get test steps

export const getGroupTestSteps = createAsyncThunk(
  "group/groupTestSteps",
  async (data = {}) => {
    let groupInitialData = {};
    groupInitialData.path = apiUrl.getGroupTestStep(data);
    groupInitialData.csrf = authHeader();
    const response = await Api.fetch(groupInitialData);
    return response.data.payload;
  }
);

//get test steps

export const getAllTestCases = createAsyncThunk(
  "group/getAllTestCases",
  async (data = {}) => {
    let groupInitialData = {};
    groupInitialData.path = apiUrl.getallTestCases();
    groupInitialData.csrf = authHeader();
    const response = await Api.fetch(groupInitialData);
    return response.data.payload;
  }
);

//get test steps

export const getAllTestSteps = createAsyncThunk(
  "group/getAllTestSteps",
  async (data = {}) => {
    let groupInitialData = {};
    groupInitialData.path = apiUrl.getallTestCases();
    groupInitialData.csrf = authHeader();
    const response = await Api.fetch(groupInitialData);
    return response.data.payload;
  }
);
