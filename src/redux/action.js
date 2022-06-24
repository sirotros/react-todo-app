import {SET_USER, SET_TOKEN } from "./types";
import api from "../api";

export const setTokenAction = (token) => ({ type: SET_TOKEN, payload: token });
export const setUserAction = (user) => ({ type: SET_USER, payload: user });

export const registerAction = (registerData) => async (dispatch) => {
  const { data } = await api.post("/auth/local/register", registerData);
  localStorage.setItem("jwt", data.jwt);
  dispatch(setUserAction(data.user));
  dispatch(setTokenAction(data.jwt));
};
export const loginAction = (loginData) => async (dispatch) => {
  const { data } = await api.post("/auth/local", loginData);
  localStorage.setItem("jwt", data.jwt);
  dispatch(setUserAction(data.user));
  dispatch(setTokenAction(data.jwt));
};

export const checkLoginAction = () => async (dispatch) => {
  const token = localStorage.getItem("jwt");
  if (!token) return;
  const { data } = await api.get("/users/me");
  dispatch(setTokenAction(token));
  dispatch(setUserAction(data));
};

export const logOut = () => (dispatch) => {
  localStorage.removeItem("jwt");
  dispatch(setUserAction(null));
  dispatch(setTokenAction(null));
};
