import axios from "axios";

export const BASE_URL = "https://server-peach-seven.vercel.app/";

const API = axios.create({
  baseURL: BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

export default API;
