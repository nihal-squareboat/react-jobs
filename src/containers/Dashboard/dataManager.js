import * as SERVICES from "./service";

export const setTokenToAPIInstanceService = (token) => {
  SERVICES.setTokenToAPIInstance(token);
};

/**
 *
 * @param {String} email
 * @param {String} password
 */
export const loginService = async (email, password) => {
  return await SERVICES.login({ email, password })
    .then((res) => {
      alert("Hello");
    })
    .catch((err) => {
      throw err;
    });
};