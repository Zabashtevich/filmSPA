import {
  ADD_FAVORITE_ITEM,
  ADD_USERLIST,
  DELETE_FAVORITE_ITEM,
  DELETE_USERLIST,
  CLOSE_WINDOW,
} from "./types";

export const initialState = {
  message: null,
  processFavorite: false,
  processUserlist: false,
  visible: false,
};

export default function processReducer(
  state = initialState,
  { type, payload },
) {
  switch (type) {
    case ADD_FAVORITE_ITEM:
      return {
        ...state,
        visible: true,
        processFavorite: true,
        message: payload,
      };
    case DELETE_FAVORITE_ITEM:
      return {
        ...state,
        process: true,
        processFavorite: true,
        message: payload,
      };
    case ADD_USERLIST:
      return {
        ...state,
        visible: true,
        processUserlist: true,
        message: payload,
      };
    case DELETE_USERLIST:
      return {
        ...state,
        visible: true,
        processUserlist: true,
        message: payload,
      };
    case CLOSE_WINDOW:
      return { ...initialState };
  }
}
