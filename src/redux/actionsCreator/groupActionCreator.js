import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiUrl } from "src/constants/apiUrl";
import { authHeader } from "../../constants/authHeader";
import { baseUrl } from "../../constants/baseUrl";
import { SuperService } from "../../services/superService";
import { testBaseUrl } from "../../constants/baseUrl";

const testApi = new SuperService(testBaseUrl);
const Api = new SuperService(baseUrl);

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
    const API = new SuperService(baseUrl);
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

//get Allgroups

export const getAllGroups = createAsyncThunk(
  "group/getAllGroups",
  async (data = {}) => {
    let getAllGroups = {};
    getAllGroups.path = apiUrl.getAllGroups();
    getAllGroups.csrf = authHeader();
    const response = await Api.fetch(getAllGroups);
    return response.data.payload;
  }
);
//clone test

export const cloneTest = createAsyncThunk(
  "group/cloneTest",
  async (data = {}) => {
    let cloneTest = {};
    cloneTest.data = data;
    cloneTest.path = apiUrl.cloneTest(data);
    cloneTest.csrf = authHeader();
    const response = await Api.post(cloneTest);
    return response.data;
  }
);
//start grouptest imediately

export const projectGroupImediatelyPlay = createAsyncThunk(
  "group/projectGroupImediatelyPlay",
  async (data = {}) => {
    let groupInitialData = {};
    groupInitialData.path = apiUrl.projectImediatelyPlay(data);
    groupInitialData.csrf = authHeader();
    const response = await testApi.put(groupInitialData);
    return response.data;
  }
);
//start test case  imediately

export const testcaseImediatelyPlay = createAsyncThunk(
  "group/testcaseImediatelyPlay",
  async (data = {}, id) => {
    let groupInitialData = {};
    groupInitialData.path = apiUrl.testcaseImediatelyPlay(data);
    groupInitialData.csrf = authHeader();
    const response = await Api.post(groupInitialData);
    return response.data;
  }
);

//test case update execution Type

export const updateTestExec = createAsyncThunk(
  "testExec/put",
  async (data = {}) => {
    let testExecData = {};
    testExecData.data = data.data;
    testExecData.path = apiUrl.updateTestcaseExecutionType(data.id);
    testExecData.csrf = authHeader();
    const response = await Api.put(testExecData);
    return response.data.payload;
  }
);

//test case update execution frequqncy

export const updateTestExecFreq = createAsyncThunk(
  "testfrequency/put",
  async (data = {}) => {
    let testfrequencyData = {};
    testfrequencyData.data = data.data;
    testfrequencyData.path = apiUrl.updateTestcaseExecutionFrequency(data.id);
    testfrequencyData.csrf = authHeader();
    const response = await Api.put(testfrequencyData);
    return response.data.payload;
  }
);

//test case update screenshot

export const updateTestcaseScreenshot = createAsyncThunk(
  "testScreenshot/put",
  async (data = {}) => {
    let testScreenshotData = {};
    testScreenshotData.data = data.data;
    testScreenshotData.path = apiUrl.updateTestScreenshot(data.id);
    testScreenshotData.csrf = authHeader();
    const response = await Api.put(testScreenshotData);
    return response.data.payload;
  }
);
//download test excel

export const downloadTest = createAsyncThunk(
  "downloadTest/get",
  async (data = {}) => {
    let downloadTest = {};
    // downloadTest.data = data.data;
    downloadTest.path = apiUrl.downloadTest(data);
    downloadTest.csrf = authHeader();
    const response = await Api.fetch(downloadTest);
    return response.data.payload;
  }
);
