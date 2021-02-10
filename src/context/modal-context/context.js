import { createContext, useState } from "react";

export const ModalContext = createContext(null);

export default function ModalContextProvider({ children }) {
  const [modalstate, setModalstate] = useState({
    visible: true,
    accepted: false,
    message: "Enter a new name",
    type: "rename",
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
      message: null,
      type: null,
      visible: false,
      accepted: true,
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
