import { START_LOADING, SET_DATA } from "./constants";

export function startLoading() {
  return { type: START_LOADING };
}

export function setData(payload) {
  console.log(payload);
  return { type: SET_DATA, payload };
}
