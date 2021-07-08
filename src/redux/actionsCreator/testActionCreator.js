import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
// import Api from "src/api-config/api-config";
import Api from "../../services/httpService";
import { apiUrl } from "src/constants/apiUrl";
import { authHeader } from "../../constants/authHeader";

export const postTestList = createAsyncThunk("testList/post", async (data = {}) => {
    let testListData = {};
    testListData.data = data;
    testListData.path = apiUrl.postTestList();
    testListData.csrf = authHeader();
    const response = await Api.post(testListData);
    return response.data.payload;
  });
export const postTest = createAsyncThunk("test/post", async (data = {}) => {
    let testData = {};
    testData.data = data;
    testData.path = apiUrl.postTest();
    testData.csrf = authHeader();
    const response = await Api.post(testData);
    return response.data.payload;
  });
  export const updateTestExec = createAsyncThunk("testExec/put", async (data = {}) => {
    let testExecData = {};
    testExecData.data = data.data;
    testExecData.path = apiUrl.updateTestExec(data.id);
    testExecData.csrf = authHeader();
    const response = await Api.put(testExecData);
    return response.data.payload;
  });
  export const updateTestScreenshot = createAsyncThunk("testScreensho/put", async (data = {}) => {
    let testScreenshotData = {};
    testScreenshotData.data = data.data;
    testScreenshotData.path = apiUrl.updateTestScreenshot(data.id);
    testScreenshotData.csrf = authHeader();
    const response = await Api.put(testScreenshotData);
    return response.data.payload;
  });