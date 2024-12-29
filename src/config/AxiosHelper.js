import axios from "axios";
export const baseURL = "https://chit-chatly-server-production.up.railway.app";
export const httpClient = axios.create({
  baseURL: baseURL,
});
