import {
  CLOSE_MODAL,
  CONFIRM_MODAL,
  SHOW_CONFIRM_MODAL,
  SHOW_ERROR_MODAL,
  SHOW_UTILITY_MODAL,
} from "./constants";

export const initialState = {
  accepted: false,
  visible: false,
  message: null,
  type: null,
  title: null,
  value: null,
};

export default function modalRe(state = initialState, { type, payload }) {
  switch (type) {
    case SHOW_ERROR_MODAL:
      return {
        ...state,
        visible: true,
        title: "ERROR",
        type: "error",
        message: payload,
      };
    case SHOW_CONFIRM_MODAL:
      return {
        ...state,
        visible: true,
        title: "CONFIRM",
        type: "confirm",
        message: payload,
      };
    case SHOW_UTILITY_MODAL:
      return {
        ...state,
        visible: true,
        title: "ENTER A NAME",
        type: "utility",
        message: payload,
      };
    case CLOSE_MODAL:
      return { ...initialState };
    case CONFIRM_MODAL:
      return {
        ...state,
        visible: false,
        message: null,
        type: null,
        title: null,
        value: payload,
      };
    default:
      return state;
  }
}
