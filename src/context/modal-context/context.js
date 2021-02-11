import { createContext, useState, useEffect } from "react";

export const ModalContext = createContext(null);

export default function ModalContextProvider({ children }) {
  const [modalstate, setModalstate] = useState({
    visible: false,
    accepted: false,
    message: null,
    type: null,
    name: null,
  });

  const showModal = (message, type) => {
    setModalstate((prev) => ({
      ...prev,
      type,
      message,
      name: null,
      accepted: false,
      visible: true,
    }));
  };

  const closeModal = () => {
    setModalstate((prev) => ({
      ...prev,
      message: null,
      type: null,
      visible: false,
    }));
  };

  const confirmModal = () => {
    setModalstate((prev) => ({
      ...prev,
      message: null,
      type: null,
      visible: false,
      accepted: true,
    }));
  };

  const renameModal = (name) => {
    setModalstate((prev) => ({
      ...prev,
      visible: false,
      message: null,
      accepted: true,
      type: null,
      name,
    }));
  };

  return (
    <ModalContext.Provider
      value={[modalstate, { showModal, closeModal, confirmModal, renameModal }]}
    >
      {children}
    </ModalContext.Provider>
  );
}
