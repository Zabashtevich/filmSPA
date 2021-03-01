import { useState, createContext } from "react";

export const ModalContext = createContext();

export default function ModalContextProvider({ children }) {
  const [state, setState] = useState({
    visible: false,
    message: null,
    type: null,
  });

  function showModal({ message, type }) {
    setState({ visible: true, message, type });
  }

  function closeModal() {
    setState({
      visible: false,
      message: null,
      type: null,
    });
  }

  return (
    <ModalContext.Provider value={[state, { showModal, closeModal }]}>
      {children}
    </ModalContext.Provider>
  );
}
