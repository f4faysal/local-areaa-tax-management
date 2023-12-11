import { authKey } from "@/constants/storageKey";
import { ResponseErrorType, ResponseSuccessType } from "@/types";
import { getFormLocalStorage } from "@/utils/local-sororage";
import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.defaults.headers.post["Content-Type"] = "application/json";
axiosInstance.defaults.headers["Accept"] = "application/json";
axiosInstance.defaults.timeout = 60000;

// Add a request interceptor
axiosInstance.interceptors.request.use(
  function (config) {
    const accessToken = getFormLocalStorage(authKey);
    if (accessToken) {
      config.headers.Authorization = accessToken;
    }
    // Do something before request is sent
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  function (response): any {
    const modifiedResponse: ResponseSuccessType = {
      data: response?.data?.data,
      meta: response?.data?.meta,
    };
    return modifiedResponse;
  },
  function (error) {
    const modifiedErrorResponse: ResponseErrorType = {
      statusCode: error?.response?.data?.statusCode || 500,
      message: error?.response?.data?.message || "Something went wrong",
      errorMessages: error?.response?.data?.errorMessages,
    };

    return modifiedErrorResponse;
  }
);

export { axiosInstance };
