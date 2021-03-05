import {
  CLOSE_MODAL,
  FINISH_PROCESS,
  SET_OFFSET,
  SET_URL,
  SHOW_MODAL,
} from "./types";

export const initialState = {
  loading: true,
  visible: false,
  offset: { start: 0, end: 5 },
  process: true,
  url: null,
};

export default function galleryReducer(
  state = initialState,
  { type, payload },
) {
  switch (type) {
    case SET_OFFSET:
      return { ...state, offset: payload };
    case SET_URL:
      return { ...state, url: payload, process: true };
    case SHOW_MODAL:
      return { ...state, visible: true };
    case CLOSE_MODAL:
      return { ...state, visible: false };
    case FINISH_PROCESS:
      return { ...state, process: false };

    default:
      return state;
  }
}
