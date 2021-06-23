import { Api } from "../constants/baseUrl";

const fetch = async ({ path, fromBase = false, csrf }) => {
  try {
    let headers = {};
    if (csrf) headers = { ...csrf };
    const res = await Api(fromBase).get(path, { headers });
    return res;
  } catch (ex) {
    throw ex;
  }
};

const post = async ({ path, data, csrf }) => {
  try {
    let headers = {};
    if (csrf) headers = { ...csrf };
    return await Api().post(path, data, { headers });
  } catch (ex) {
    throw ex;
  }
};

const postUser = async ({ path, data, headers, csrf }) => {
  try {
    return await Api().post(path, data, headers);
  } catch (ex) {
    throw ex;
  }
};

const put = async ({ path, data, csrf }) => {
  try {
    let headers = {};
    if (csrf) headers = { ...csrf };
    return await Api().put(path, data, { headers });
  } catch (ex) {
    throw ex;
  }
};

const dell = async ({ path, csrf }) => {
  try {
    let headers = {};
    if (csrf) headers = { ...csrf };
    return await Api().delete(path, { headers });
  } catch (ex) {
    throw ex;
  }
};

const patch = async ({ path, data, csrf }) => {
  let headers = {};
  if (csrf) headers = { ...csrf };
  return await Api().patch(path, data, { headers });
};


export default {
  post,
  dell,
  fetch,
  patch,
  put,
  postUser,
};