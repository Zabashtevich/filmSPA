import { createContext, useState } from "react";

export const ModalContext = createContext(null);

export default function ModalContextProvider({ children }) {
  const [modalstate, setModalstate] = useState({
    visible: false,
    accepted: false,
    message: null,
    type: null,
    name: null,
    deleteID: null,
  });

  const showModal = (message, type, id = null) => {
    setModalstate((prev) => ({
      ...prev,
      type,
      message,
      name: null,
      accepted: false,
      visible: true,
      deleteID: id,
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
