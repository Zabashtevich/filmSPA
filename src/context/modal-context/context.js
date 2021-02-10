import { createContext, useState, useEffect } from "react";

export const ModalContext = createContext(null);

export default function ModalContextProvider({ children }) {
  const [modalstate, setModalstate] = useState({
    visible: false,
    accepted: false,
    message: null,
    type: null,
  });

  const { visible, accepted } = modalstate;

  const showModal = (message, type) => {
    setModalstate((prev) => ({ ...prev, type, message, visible: true }));
  };

  const closeModal = () => {
    setModalstate((prev) => ({
      ...prev,
      visible: false,
    }));
  };

  const confirmModal = () => {
    setModalstate((prev) => ({ ...prev, visible: false, accepted: true }));
  };

  useEffect(() => {
    return () =>
      setModalstate((prev) => ({
        ...prev,
        message: null,
        type: null,
        accepted: false,
      }));
  }, []);

  return (
    <ModalContext.Provider
      value={[modalstate, { showModal, closeModal, confirmModal }]}
    >
      {children}
    </ModalContext.Provider>
  );
}
