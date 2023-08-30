import { API_URL } from "../../config/api";

import {
  LOGIN_SUCCESS,
  LOGIN_LOADING,
  REGISTER_SUCCESS,
  REGISTER_LOADING,
} from "./actionType";

export const fetchLoginSuccess = (payload) => {
  return {
    type: LOGIN_SUCCESS,
    payload,
  };
};

export const fetchLoginLoading = (payload) => {
  return {
    type: LOGIN_LOADING,
    payload,
  };
};

export const fetchRegisterSuccess = (payload) => {
  return {
    type: REGISTER_SUCCESS,
    payload,
  };
};

export const fetchRegisterLoading = (payload) => {
  return {
    type: REGISTER_LOADING,
    payload,
  };
};

export function login(loginData) {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchLoginLoading(true));

      const response = await fetch(API_URL + "/login", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });

      // const responseJSON = await response.json();
      // if (!response.ok) throw responseJSON.message;
      // localStorage.setItem("access_token", responseJSON.access_token);
      // return dispatch(fetchLoginSuccess(responseJSON));
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      dispatch(fetchLoginLoading(false));
    }
  };
}

export function register(payload) {
  return async (dispatch, getState) => {
    try {
      dispatch(fetchRegisterLoading(true));
      if (!payload.email || !payload.password) {
        throw new Error("Email and Password field is required");
      }

      const response = await fetch(API_URL + "/add-admin", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          access_token: localStorage.access_token,
        },
        body: JSON.stringify({ ...payload, role: "admin" }),
      });

      const responseJSON = await response.json();
      if (!response.ok) throw responseJSON.message;
      return dispatch(fetchRegisterSuccess(responseJSON));
    } catch (error) {
      console.log(error);
      throw error;
    } finally {
      dispatch(fetchRegisterLoading(false));
    }
  };
}
