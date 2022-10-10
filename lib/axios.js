import Axios from "axios";
import Cookies from "js-cookie";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const axios = Axios.create({
  baseURL: baseUrl,
});
axios.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const accessToken = Cookies.get("accessToken");
      if (accessToken) {
        config.headers.Authorization = `${accessToken}`;
      }
      config.headers["Content-Type"] = "application/form-data";
      config.headers.Accept = "application/json";
    }
    return config;
  },
  (error) => Promise.reject(error)
);
axios.interceptors.response.use(
  (response) => response,
  (error) =>
    Promise.reject(
      (error.response && error.response.data) || "Something went wrong"
    )
);
export default axios;
