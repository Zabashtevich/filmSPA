import {
  initialState,
  SHOW_CONFIRM_MODAL,
  SHOW_ERROR_MODAL,
  SHOW_UTILITY_MODAL,
  CLOSE_MODAL,
  ACCEPT_CONFIRM_MODAL,
  ACCEPT_UTILITY_MODAL,
  SHOW_PROCESSING_WINDOW,
  CLOSE_PROCESSING_WINDOW,
} from "./constants";

export default function profileMetalogicReducer(
  state = initialState,
  { type, payload },
) {
  switch (type) {
    case SHOW_ERROR_MODAL:
      return {
        ...state,
        type: "error",
        visible: true,
        title: "ERROR",
        message: payload,
      };
    case SHOW_CONFIRM_MODAL:
      return {
        ...state,
        ...payload,
        type: "confirm",
        visible: true,
        title: "CONFIRM",
      };
    case SHOW_UTILITY_MODAL:
      return { ...state, ...payload, type: "utility", visible: true };
    case CLOSE_MODAL:
      return { ...initialState };
    case ACCEPT_CONFIRM_MODAL:
      return { ...state, visible: false, accepted: true };
    case ACCEPT_UTILITY_MODAL:
      return { ...state, visible: false, accepted: true, value: payload };
    case SHOW_PROCESSING_WINDOW:
      return { ...state, processing: true, message: payload };
    case CLOSE_PROCESSING_WINDOW:
      return { ...state, processing: false };
    default:
      return state;
  }
}
