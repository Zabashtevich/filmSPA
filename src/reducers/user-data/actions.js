import {
  FETCH_USERDATA_SUCCESS,
  FETCH_USERDATA_START,
  SET_USERDATA,
} from "./constants";

export const fetchLoadingStart = () => ({ type: FETCH_USERDATA_START });

export const fetchLoadingFinished = () => ({ type: FETCH_USERDATA_SUCCESS });

export const setUserData = (userData) => ({
  type: SET_USERDATA,
  payload: userData,
});
