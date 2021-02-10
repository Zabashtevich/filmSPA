import { createContext, useState, useEffect } from "react";

export const ModalContext = createContext(null);

export default function ModalContextProvider({ children }) {
  const [modalstate, setModalstate] = useState({
    visible: false,
    accepted: false,
  });

  const { visible, accepted } = modalstate;

  const showModal = () => {
    setModalstate((prev) => ({ ...prev, visible: true }));
  };

  const closeModal = () => {
    setModalstate((prev) => ({ ...prev, visible: false }));
  };

  const acceptModal = () => {
    setModalstate({ visible: false, accepted: true });
  };

  useEffect(() => {
    return () => setModalstate((prev) => ({ ...prev, accepted: false }));
  }, []);

  return (
    <ModalContext.Provider
      value={[accepted, visible, acceptModal, showModal, closeModal]}
    >
      {children}
    </ModalContext.Provider>
  );
}
