import {
  SHOW_MODAL,
  SET_VIDEOS,
  SET_MOUNTED,
  FINISH_PROCESS,
  SET_URL,
  CLOSE_MODAL,
} from "./types";

export const initialState = {
  videos: null,
  url: null,
  mounted: false,
  process: true,
  visible: false,
};

export default function trailerReducer(
  state = initialState,
  { type, payload },
) {
  switch (type) {
    case SET_VIDEOS:
      return {
        ...state,
        videos: payload,
      };
    case SHOW_MODAL:
      return { ...state, visible: true };
    case SET_MOUNTED:
      return { ...state, mounted: true };
    case FINISH_PROCESS:
      return { ...state, process: false };
    case SET_URL:
      return { ...state, url: payload, process: true };
    case CLOSE_MODAL:
      return { ...state, url: null, visible: false };
    default:
      return state;
  }
}
