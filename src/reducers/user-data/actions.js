import {
  FETCH_FINISHED_SUCCESS,
  FETCH_LOADING_START,
  SET_USER_DATA,
} from "./constants";

export const fetchLoadingStart = () => ({ type: FETCH_LOADING_START });

export const fetchLoadingFinished = () => ({ type: FETCH_FINISHED_SUCCESS });

export const setUserData = (userData) => ({
  type: SET_USER_DATA,
  payload: userData,
});
