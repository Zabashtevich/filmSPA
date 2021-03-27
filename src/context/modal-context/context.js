import { createContext, useReducer } from "react";

import { CLOSE_MODAL, SHOW_CONFIRM_MODAL, SHOW_ERROR_MODAL } from "./types";
import modalReducer, { initialState } from "./reducer";

export const ModalContext = createContext(null);

export default function ModalContextProvider({ children }) {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  function showErrorModal(message) {
    dispatch({ type: SHOW_ERROR_MODAL, payload: message });
  }

  function showConfirmModal(payload) {
    dispatch({ type: SHOW_CONFIRM_MODAL, payload });
  }

  function closeModal() {
    dispatch({ type: CLOSE_MODAL });
  }

  function confirmModal() {
    state.callback();
    closeModal();
  }

  return (
    <ModalContext.Provider
      value={[
        state,
        { showErrorModal, showConfirmModal, closeModal, confirmModal },
      ]}
    >
      {children}
    </ModalContext.Provider>
  );
}
