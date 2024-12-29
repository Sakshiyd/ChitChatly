import axios from "axios";
export const baseURL = "http://localhost:7000";
export const httpClient = axios.create({
  baseURL: baseURL,
});
