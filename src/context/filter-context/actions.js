import { SET_FILTER_PARAMS, RESET_FILTER_PARAMS } from "./constants";

export const setFilterParams = (params) => {
  return { type: SET_FILTER_PARAMS, payload: params };
};

export const resetFilterParams = () => ({ type: RESET_FILTER_PARAMS });
