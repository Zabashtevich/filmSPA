import {
  CLOSE_GALLERY,
  SET_OFFSET,
  SET_IMAGES,
  SET_LOADING,
  SHOW_GALLERY,
} from "./types";

export const initialState = {
  offset: { start: 0, end: 5 },
  images: null,
  loading: true,
  visible: false,
  url: null,
};

export default function galleryReducer(
  state = initialState,
  { type, payload },
) {
  switch (type) {
    case SET_IMAGES:
      return { ...state, images: payload, loading: false };
    case SET_URL:
      return { ...state, url: payload };
    case SHOW_GALLERY:
      return { ...state, visible: true };
    case CLOSE_GALLERY:
      return { ...state, visible: false };
    case SET_OFFSET:
      return { ...state, offset: payload };
    case SET_LOADING:
      return { ...state, loading: payload };
    default:
      return state;
  }
}
