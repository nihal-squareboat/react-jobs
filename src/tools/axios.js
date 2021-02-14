import axios from "axios";
import { get } from "lodash";
import config from "../config";
import store from "../store";
import { TYPES } from '../containers/Login/Constants';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

const configureAxios = () => {
  return axios.create({
    baseURL: config("app.base_url"),
    timeout: 60000,
  });
};

export const axiosInstance = configureAxios();

axiosInstance.interceptors.request.use(
  (config) => {
    if (process.env.NODE_ENV === "development") {
      console.log("Config ======>", config);
    }
    const AuthStore = get(store.store.getState(), "auth");
    if (AuthStore) {
      if (AuthStore.isAuthenticated) {
        const token = get(AuthStore, "user.token");
        config.headers.Authorization = `bearer ${token}`;
      }
    }
    return config;
  },
  (error) => {
    if (process.env.NODE_ENV === "development") {
      console.log("Error ======>", error);
    }
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (res) => {
    if (process.env.NODE_ENV === "development") {
      console.log("Response ======>", res);
    }
    return res.data;
  },
  (err) => {
    if (process.env.NODE_ENV === "development") {
      console.log("ERROR ======>", err.response);
    }
    if (err?.response?.data?.code === 401) {
      if (window.location.pathname !== "/" && window.location.pathname !== "/login") {
        alert("Your session has expired. Please login again.");
        store.store.dispatch({
          type: TYPES.USER_LOGOUT,
        });
        history.push("/login");
        window.location.reload(false);
      }
    }
    return Promise.reject(err);
  },
);
