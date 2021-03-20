import React, { createContext, useReducer } from "react";
import {
  CLOSE_NOTICE,
  SHOW_DEFAULT_NOTICE,
  SHOW_ERROR_NOTICE,
} from "./constants";
import noticeReducer, { initialState } from "./reducer";

export const NoticeContext = createContext(null);

export default function NoticeContextProvider({ children }) {
  const [state, dispatch] = useReducer(noticeReducer, initialState);

  function showErrorNotice(payload) {
    dispatch({ type: SHOW_ERROR_NOTICE, payload });
  }

  function showDefaultNotice(payload) {
    dispatch({ type: SHOW_DEFAULT_NOTICE, payload });
  }

  function closeNotice() {
    dispatch({ type: CLOSE_NOTICE });
  }

  return (
    <NoticeContext.Provider
      value={[state, { showErrorNotice, showDefaultNotice, closeNotice }]}
    >
      {children}
    </NoticeContext.Provider>
  );
}
