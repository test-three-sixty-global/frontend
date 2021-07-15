import { SuperService } from "./superService";

const API = (baseUrl) => new SuperService(baseUrl);
export default API;
