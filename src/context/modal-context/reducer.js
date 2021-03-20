import { SHOW_ERROR_MODAL, SHOW_CONFIRM_MODAL, CLOSE_MODAL } from "./constants";

export const initialState = {
  visible: false,
  type: null,
  message: null,
  callback: null,
};

export default function modalReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SHOW_ERROR_MODAL:
      return { ...state, type: "error", message: payload, visible: true };
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
