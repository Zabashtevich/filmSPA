import { SET_USERDATA } from "./constants";

export const setUserData = (userData) => ({
  type: SET_USERDATA,
  payload: userData,
});
