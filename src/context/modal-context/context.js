import { createContext, useState } from "react";

export const ModalContext = createContext(null);

const initialState = {
  visible: false,
  type: null,
  message: null,
  callback: null,
};

export default function ModalContextProvider({ children }) {
  const [state, setState] = useState(initialState);

  function showErrorModal(message) {
    setState((prev) => ({ ...prev, type: "error", message, visible: true }));
  }

  function showConfirmModal(message, func) {
    setState({ type: "confirm", message, visible: true, callback: func });
  }

  function confirmModal() {
    state.callback();
    setState(initialState);
  }

  function closeModal() {
    setState(initialState);
  }

  return (
    <ModalContext.Provider
      value={[
        state,
        { showErrorModal, showConfirmModal, confirmModal, closeModal },
      ]}
    >
      {children}
    </ModalContext.Provider>
  );
}
