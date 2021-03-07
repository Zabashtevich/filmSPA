import {
  CLOSE_MODAL,
  SET_OFFSET,
  SET_URL,
  SHOW_MODAL,
  SET_IMAGES,
  FINISH_PROCESS,
  SET_MOUNTED,
} from "./types";

export const initialState = {
  mounted: false,
  images: null,
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
    case SET_IMAGES:
      return {
        ...state,
        images: payload,
      };
    case FINISH_PROCESS:
      return { ...state, process: false };
    case SET_MOUNTED:
      return { ...state, mounted: true };
    default:
      return state;
  }
}
