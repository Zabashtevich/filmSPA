import React, { createContext, useReducer } from "react";

import galleryReducer, { initialState } from "./reducer";
import {
  CLOSE_MODAL,
  SET_IMAGES,
  SET_OFFSET,
  SET_URL,
  SHOW_MODAL,
  FINISH_PROCESS,
  SET_MOUNTED,
} from "./types";

export const GalleryContext = createContext(null);

export default function GalleryContextProvider({ children }) {
  const [state, dispatch] = useReducer(galleryReducer, initialState);

  function setOffset(payload) {
    dispatch({ type: SET_OFFSET, payload });
  }

  function setUrl(payload) {
    dispatch({ type: SET_URL, payload });
  }

  function showModal() {
    document.body.style.overflow = "hidden";
    dispatch({ type: SHOW_MODAL });
  }

  function closeModal() {
    document.body.style.overflow = "auto";
    dispatch({ type: CLOSE_MODAL });
  }

  function setImages(payload) {
    if (payload.length > 0) {
      dispatch({ type: SET_IMAGES, payload });
      dispatch({ type: SET_MOUNTED });
      dispatch({ type: SET_URL, payload: payload[0].file_path });
    }
  }

  function finishProcess() {
    dispatch({ type: FINISH_PROCESS });
  }

  return (
    <GalleryContext.Provider
      value={[
        state,
        { setOffset, setUrl, showModal, closeModal, setImages, finishProcess },
      ]}
    >
      {children}
    </GalleryContext.Provider>
  );
}
