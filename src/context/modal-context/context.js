import { createContext, useReducer } from "react";
import {
  CLOSE_MODAL,
  CONFIRM_MODAL,
  SHOW_CONFIRM_MODAL,
  SHOW_ERROR_MODAL,
  SHOW_PROCESSING_WINDOW,
  SHOW_UTILITY_MODAL,
} from "./constants";
import modalReducer, { initialState } from "./reducer";

export const ModalContext = createContext(null);

export default function ModalContextProvider({ children }) {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  function showErrorModal(payload) {
    dispatch({ type: SHOW_ERROR_MODAL, payload });
  }

  function showConfirmModal(payload) {
    dispatch({ type: SHOW_CONFIRM_MODAL, payload });
  }

  function showUtilityModal(payload) {
    dispatch({ type: SHOW_UTILITY_MODAL, payload });
  }

  function showProcessingWindow(payload) {
    dispatch({ type: SHOW_PROCESSING_WINDOW, payload });
  }

  function closeModal() {
    dispatch({ type: CLOSE_MODAL });
  }

  function confirmModal(payload = null) {
    dispatch({ type: CONFIRM_MODAL, payload });
  }

  return (
    <ModalContext.Provider
      value={[
        { state },
        {
          showErrorModal,
          showConfirmModal,
          showUtilityModal,
          showProcessingWindow,
          closeModal,
          confirmModal,
        },
      ]}
    >
      {children}
    </ModalContext.Provider>
  );
}
