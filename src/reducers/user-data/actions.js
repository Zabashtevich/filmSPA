import {
  LOGOUT,
  SET_USER_DATA,
  SET_USER_PROFILE,
  PROFILE_NOT_EXIST,
} from "./types";

export const setUserProfile = (payload) => ({
  type: SET_USER_PROFILE,
  payload,
});

export const logout = () => ({ type: LOGOUT });

export const setUserData = () => ({ type: SET_USER_DATA, payload });

export const profileNotExist = () => ({ type: PROFILE_NOT_EXIST });
