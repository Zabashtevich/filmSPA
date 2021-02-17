import {
  ACCEPT_MODAL,
  HIDE_ERROR_MODAL,
  HIDE_REMOVE_MODAL,
  HIDE_WARNING_MODAL,
  SHOW_ERROR_MODAL,
  SHOW_REMOVE_MODAL,
  SHOW_WARNING_MODAL,
  initialState,
} from "./constants";

export default function accountReducer(
  state = initialState,
  { type, payload },
) {
  switch (type) {
    case SHOW_ERROR_MODAL:
      return { ...state, errorModal: { visible: true, message: payload } };
    case HIDE_ERROR_MODAL:
      return { ...state, errorModal: { visible: false, message: "" } };
    case SHOW_WARNING_MODAL:
      return { ...state, warningModal: { visible: true, message: payload } };
    case HIDE_WARNING_MODAL:
      return { ...state, warningModal: { visible: false, message: "" } };
    case SHOW_REMOVE_MODAL:
      return { ...state, removeModal: { visible: true, ...payload } };
    case HIDE_REMOVE_MODAL:
      return {
        ...state,
        removeModal: { visible: false, id: null, message: "", subtype: null },
      };
    case ACCEPT_MODAL:
      return { ...state, accepted: true, target: payload };
    default:
      return state;
  }
}
