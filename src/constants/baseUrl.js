import axios from "axios";
let BaseApi = axios.create({
  baseURL:
    "http://ec2-18-116-115-34.us-east-2.compute.amazonaws.com:7080/api/v1",
  withCredentials: false
});

export const Api = () => {
  return BaseApi;
};
