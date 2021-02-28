import {
  CLOSE_MODAL,
  CONFIRM_MODAL,
  SHOW_CONFIRM_MODAL,
  SHOW_ERROR_MODAL,
  SHOW_UTILITY_MODAL,
  ADD_FAVORITE,
  ADD_USERLIST,
} from "./types";

export const initialState = {
  accepted: false,
  visible: false,
  value: null,
  message: null,
  type: null,
};

export default function modalReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SHOW_ERROR_MODAL:
      return {
        ...state,
        visible: true,
        type: "error",
        message: payload,
      };
    case SHOW_CONFIRM_MODAL:
      return {
        ...state,
        visible: true,
        type: "confirm",
        message: payload,
      };
    case SHOW_UTILITY_MODAL:
      return {
        ...state,
        visible: true,
        type: "utility",
        ...payload,
      };
    case ADD_FAVORITE:
      return {
        ...state,
        processing: true,
        message: payload,
        addingFavorite: true,
      };
    case ADD_USERLIST:
      return {
        ...state,
        processing: true,
        message: payload,
        addingUserlist: true,
      };
    case CLOSE_MODAL:
      return { ...initialState };
    case CONFIRM_MODAL:
      return {
        ...initialState,
        value: payload,
        accepted: true,
      };
    default:
      return state;
  }
}
