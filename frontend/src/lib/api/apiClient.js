import { API_BASE_URL } from "@/lib/constants";
import axios from "axios";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
});

export default apiClient;
