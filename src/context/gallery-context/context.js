import React, { createContext, useReducer } from "react";

import galleryReducer, { initialState } from "./reducer";
import {
  CLOSE_MODAL,
  FINISH_PROCESS,
  SET_OFFSET,
  SET_URL,
  SHOW_MODAL,
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
    dispatch({ type: SHOW_MODAL });
  }

  function closeModal() {
    dispatch({ type: CLOSE_MODAL });
  }

  function finishProcess() {
    dispatch({ type: FINISH_PROCESS });
  }

  return (
    <GalleryContext.Provider
      value={[
        state,
        { setOffset, setUrl, showModal, closeModal, finishProcess },
      ]}
    >
      {children}
    </GalleryContext.Provider>
  );
}
