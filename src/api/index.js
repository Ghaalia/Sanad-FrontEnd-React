import axios from "axios";

const BASE_URL = "";
const instance = axios.create({
  baseURL: BASE_URL,
});

export { instance, BASE_URL };
