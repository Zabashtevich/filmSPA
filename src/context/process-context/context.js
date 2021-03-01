import { createContext, useReducer } from "react";

import { CLOSE_PROCESS_WINDOW, SHOW_PROCESS_WINDOW } from "./types";
import processReducer, { initialState } from "./reducer";

export const ProcessContext = createContext(null);

export default function ProcessContextProvider({ children }) {
  const [state, dispatch] = useReducer(processReducer, initialState);

  function showProcessWindow(payload) {
    dispatch({ type: SHOW_PROCESS_WINDOW, payload });
  }

  function closeProcessWindow(payload) {
    dispatch({ type: CLOSE_PROCESS_WINDOW, payload });
  }

  return (
    <ProcessContext.Provider
      value={[{ ...state }, { showProcessWindow, closeProcessWindow }]}
    >
      {children}
    </ProcessContext.Provider>
  );
}
