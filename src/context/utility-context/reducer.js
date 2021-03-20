import {
  CLOSE_UTILITY,
  SHOW_DEFAULT_UTILITY,
  SHOW_ERROR_UTILITY,
} from "./constants";

export const initialState = {
  visible: false,
  message: null,
  type: null,
  errors: null,
};

export default function utilityReducer(
  state = initialState,
  { type, payload },
) {
  switch (type) {
    case SHOW_ERROR_UTILITY:
      return {
        ...state,
        visible: true,
        type: "error",
        errors: payload,
      };
    case SHOW_DEFAULT_UTILITY:
      return { ...state, visible: true, message: payload, type: "default" };
    case CLOSE_UTILITY:
      return { ...initialState };
    default:
      return state;
  }
}
