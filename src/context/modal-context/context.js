import { createContext, useState } from "react";

export const ModalContext = createContext(null);

const initialState = {
  rename: { id: null, accepted: false, name: null },
  newlist: { name: null, accepted: false },
  confirm: { id: null, accepted: false },
  message: null,
  visible: false,
};

export default function ModalContextProvider({ children }) {
  const [modalstate, setModalstate] = useState(initialState);

  const showModal = (target, message, settings) => {
    setModalstate((prev) => ({ ...prev, [target]: { ...settings }, message }));
  };

  const closeModal = (target = null) => {
    if (!!target) {
      setModalstate((prev) => ({
        ...prev,
        [target]: { ...initialState[target] },
        message: null,
        visible: false,
      }));
    } else {
      setModalstate((prev) => ({ ...prev, message: null, visible: false }));
    }
  };

  const confirmModal = (target, settings = {}) => {
    setModalstate((prev) => ({
      ...prev,
      [target]: { ...initialState[target], ...settings, accepted: true },
      message: null,
      visible: false,
    }));
  };

  const refreshModal = () => {
    setModalstate(initialState);
  };

  return (
    <ModalContext.Provider
      value={[
        modalstate,
        { showModal, closeModal, confirmModal, refreshModal },
      ]}
    >
      {children}
    </ModalContext.Provider>
  );
}
