import axios from "axios";

const buildAPI = () => {
  const instance = axios.create({
    baseURL: process.env.BASE_URL,
    withCredentials: false,
  });
  instance.interceptors.request.use((config: any) => ({
    ...config,
    headers: {
      ...config.headers,
      // Authorization: `Bearer ${getAccessToken()}`,
    },
    withCredentials: false,
  }));
  return instance;
};

const api = buildAPI();

export default api;
