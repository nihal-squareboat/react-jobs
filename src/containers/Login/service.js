import { API } from "./Constants";
import { axiosInstance } from "../../tools";

export const setTokenToAPIInstance = async (token) => {
  axiosInstance.defaults.headers.common["Authorization"] = `bearer ${token}`;
};

export const login = async (payload) => {
  return await axiosInstance.post(API.LOGIN, payload);
};