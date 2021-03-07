import React, { useReducer, createContext } from "react";
import trailerReducer, { initialState } from "./reducer";
import { CLOSE_MODAL, FINISH_PROCESS, SET_URL, SHOW_MODAL } from "./types";

export const TrailerContext = createContext(null);

export default function TrailerContextProvider({ children }) {
  const [state, dispatch] = useReducer(trailerReducer, initialState);

  function setVideos(payload) {
    if (payload.length > 0) {
      dispatch({ type: SET_MOUNTED });
      dispatch({ type: SET_VIDEOS, payload });
    }
  }

  function showModal() {
    dispatch({ type: SHOW_MODAL });
  }

  function setUrl(payload) {
    dispatch({ type: SET_URL, payload });
  }

  function closeModal() {
    dispatch({ type: CLOSE_MODAL });
  }

  function finishProcess() {
    dispatch({ type: FINISH_PROCESS });
  }

  return (
    <TrailerContext.Provider
      value={[
        state,
        { setVideos, showModal, setUrl, closeModal, finishProcess },
      ]}
    >
      {children}
    </TrailerContext.Provider>
  );
}
