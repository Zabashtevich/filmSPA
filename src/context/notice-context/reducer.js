import {
  CLOSE_NOTICE,
  SHOW_DEFAULT_NOTICE,
  SHOW_ERROR_NOTICE,
} from "./constants";

export const initialState = {
  visible: false,
  message: null,
  type: null,
  errors: null,
};

export default function noticeReducer(state = initialState, { type, payload }) {
  switch (type) {
    case SHOW_ERROR_NOTICE:
      return {
        ...state,
        visible: true,
        type: "error",
        errors: payload,
      };
    case SHOW_DEFAULT_NOTICE:
      return { ...state, visible: true, message: payload, type: "default" };
    case CLOSE_NOTICE:
      return { ...initialState };
    default:
      return state;
  }
}
