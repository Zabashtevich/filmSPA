import { useReducer } from "react";
import useEstimate from "../../hooks/useEstimate";

import {
  initialState,
  AccountMetalogicContext,
  SHOW_ERROR_MODAL,
  SHOW_CONFIRM_MODAL,
  SHOW_UTILITY_MODAL,
  CLOSE_MODAL,
  ACCEPT_CONFIRM_MODAL,
  ACCEPT_UTILITY_MODAL,
  SHOW_PROCESSING_WINDOW,
  CLOSE_PROCESSING_WINDOW,
} from "./constants";
import accountReducer from "./reducer";

export default function AccountMetalogicContextProvider({ children }) {
  const [state, dispatch] = useReducer(accountReducer, initialState);

  function showErrorModal(message) {
    dispatch({ type: SHOW_ERROR_MODAL, payload: message });
  }

  function showConfirmModal(payload) {
    dispatch({ type: SHOW_CONFIRM_MODAL, payload });
  }

  function showUtilityModal(payload) {
    dispatch({ type: SHOW_UTILITY_MODAL, payload });
  }

  function closeModal() {
    dispatch({ type: CLOSE_MODAL });
  }

  function acceptConfirmModal() {
    dispatch({ type: ACCEPT_CONFIRM_MODAL });
  }

  function acceptUtilityModal(payload) {
    dispatch({ type: ACCEPT_UTILITY_MODAL, payload });
  }

  function showProcessingWindow(payload) {
    dispatch({ type: SHOW_PROCESSING_WINDOW, payload });
  }

  function closeProcessingWindow() {
    dispatch({ type: CLOSE_PROCESSING_WINDOW });
  }

  return (
    <AccountMetalogicContext.Provider
      value={[
        state,
        {
          showErrorModal,
          showConfirmModal,
          showUtilityModal,
          closeModal,
          acceptConfirmModal,
          acceptUtilityModal,
          showProcessingWindow,
          closeProcessingWindow,
        },
      ]}
    >
      {children}
    </AccountMetalogicContext.Provider>
  );
}
