import { SHOW_PROCESS_WINDOW, CLOSE_PROCESS_WINDOW } from "./types";

export const initialState = {
  message: null,
  favoriteProcess: false,
  userlistProcess: false,
  estimateProcess: false,
  visible: false,
};

export default function processReducer(
  state = initialState,
  { type, payload },
) {
  switch (type) {
    case SHOW_PROCESS_WINDOW:
      return {
        ...state,
        visible: true,
        message: payload.message,
        [payload.type]: true,
      };
    case CLOSE_PROCESS_WINDOW:
      return { ...state, visible: false, message: null, [payload.type]: false };
    default:
      return state;
  }
}
