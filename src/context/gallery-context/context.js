import React, { createContext, useReducer } from "react";
import galleryReducer, { initialState } from "./reducer";
import {
  CLOSE_GALLERY,
  NEXT_OFFSET,
  PREVIOUS_OFFSET,
  SET_IMAGES,
  SET_LOADING,
  SET_URL,
  SHOW_GALLERY,
} from "./types";

export const GalleryContext = createContext(null);

export default function GalleryContextProvider({ children }) {
  const [state, dispatch] = useReducer(galleryReducer, initialState);

  function setImages(payload) {
    dispatch({ type: SET_IMAGES, payload });
  }

  function setUrl(payload) {
    dispatch({ type: SET_URL, payload });
  }

  function showGallery() {
    dispatch({ type: SHOW_GALLERY });
  }

  function closeGallery() {
    dispatch({ type: CLOSE_GALLERY });
  }

  function previousOffset(payload) {
    dispatch({ type: PREVIOUS_OFFSET, payload });
  }

  function nextOffset(payload) {
    dispatch({ type: NEXT_OFFSET, payload });
  }

  function setLoading(payload) {
    dispatch({ type: SET_LOADING, payload });
  }

  return (
    <GalleryContext.Provider
      value={[
        state,
        {
          setImages,
          setUrl,
          showGallery,
          closeGallery,
          previousOffset,
          nextOffset,
          setLoading,
        },
      ]}
    >
      {children}
    </GalleryContext.Provider>
  );
}
