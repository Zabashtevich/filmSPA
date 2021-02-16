import { SET_USER_PROFILE, USER_LOGOUT } from "./constants";

export const setUserProfile = (profile) => ({
  type: SET_USER_PROFILE,
  payload: profile,
});

export const userLogout = () => ({ type: USER_LOGOUT });
