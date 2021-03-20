import React, { createContext, useReducer } from "react";
import {
  CLOSE_UTILITY,
  SHOW_DEFAULT_UTILITY,
  SHOW_ERROR_UTILITY,
} from "./constants";
import utilityReducer, { initialState } from "./reducer";

export const UtilityContext = createContext(null);

export default function UtilityContextProvider({ children }) {
  const [state, dispatch] = useReducer(utilityReducer, initialState);

  function showErrorUtility(payload) {
    dispatch({ type: SHOW_ERROR_UTILITY, payload });
  }

  function showDefaultUtility(payload) {
    dispatch({ type: SHOW_DEFAULT_UTILITY, payload });
  }

  function closeUtility() {
    dispatch({ type: CLOSE_MODAL });
  }

  return (
    <UtilityContext.Provider
      value={[state, { showErrorUtility, showDefaultUtility, closeUtility }]}
    >
      {children}
    </UtilityContext.Provider>
  );
}
