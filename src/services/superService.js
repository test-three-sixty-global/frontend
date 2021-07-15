import axios from "axios";
import { toast } from "react-toastify";

export class SuperService {
  constructor(url) {
    const options = {
      baseURL: url,
      // any options that you would want for all axios requests,
      // like (proxy, etc...)
    };
    this.API = axios.create(options);
    // Your default config
    this.API.interceptors.response.use(
      (res) => {
        return res;
      },
      (error) => {
        const expectedError =
          error.response?.status >= 400 && error.response?.status < 500;

        if (!expectedError) {
          toast.error("An unexpected error occurrred.");
        }

        if (error.response?.status === 400) {
          toast.error("Sign in to continue");
          setTimeout(() => {
            localStorage.removeItem("token");
            window.location = "/login";
          }, 100);
        }

        return Promise.reject(error);
      }
    );
  }

  fetch = async ({ path, csrf }) => {
    try {
      let headers = {};
      if (csrf) headers = { ...csrf };
      const res = await this.API.get(path, { headers });
      return res;
    } catch (ex) {
      throw ex;
    }
  };

  post = async ({ path, data, csrf }) => {
    try {
      let headers = {};
      if (csrf) headers = { ...csrf };
      return await this.API.post(path, data, { headers });
    } catch (ex) {
      throw ex;
    }
  };

  postUser = async ({ path, data, headers, csrf }) => {
    try {
      return await this.API.post(path, data, headers);
    } catch (ex) {
      throw ex;
    }
  };

  put = async ({ path, data, csrf }) => {
    try {
      let headers = {};
      if (csrf) headers = { ...csrf };
      return await this.API.put(path, data, { headers });
    } catch (ex) {
      throw ex;
    }
  };

  dell = async ({ path, csrf }) => {
    try {
      let headers = {};
      if (csrf) headers = { ...csrf };
      return await this.API.delete(path, { headers });
    } catch (ex) {
      throw ex;
    }
  };

  patch = async ({ path, data, csrf }) => {
    let headers = {};
    if (csrf) headers = { ...csrf };
    return await this.API.patch(path, data, { headers });
  };
}
