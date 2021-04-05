import {
  SHOW_ERROR_MODAL,
  SHOW_CONFIRM_MODAL,
  CLOSE_MODAL,
  SHOW_ERROR_LIST,
} from "./types";

export const initialState = {
  visible: true,
  type: "error",
  message: "hahaha",
  callback: null,
  list: null,
};

export default function modalReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SHOW_ERROR_MODAL:
      return { ...state, type: "error", message: payload, visible: true };
    case SHOW_ERROR_LIST:
      return { ...state, type: "error", list: payload, visible: true };
    case SHOW_CONFIRM_MODAL:
      return {
        ...state,
        type: "confirm",
        message: payload.message,
        visible: true,
        callback: payload.func,
      };
    case CLOSE_MODAL:
      return { ...initialState };
    default:
      return state;
  }
}
