import { createContext, useState } from "react";

export const ModalContext = createContext(null);

const initialState = {
  rename: { id: null, accepted: false, name: null },
  newlist: { name: null, accepted: false },
  confirm: { accepted: false },
  delete: { id: null, accepted: false },
  message: null,
  visible: false,
  type: null,
  processed: false,
};

export default function ModalContextProvider({ children }) {
  const [modalstate, setModalstate] = useState(initialState);

  const showModal = (type, message, settings = {}) => {
    setModalstate((prev) => ({
      ...prev,
      [type]: { ...initialState[type], ...settings },
      message,
      type,
      visible: true,
    }));
  };
  console.log(modalstate);
  const closeModal = (type = null) => {
    if (!!type) {
      setModalstate((prev) => ({
        ...prev,
        [type]: { ...initialState[type] },
        message: null,
        visible: false,
        type: null,
      }));
    } else {
      setModalstate((prev) => ({ ...prev, message: null, visible: false }));
    }
  };

  const confirmModal = (type, settings = {}) => {
    setModalstate((prev) => ({
      ...prev,
      [type]: { ...prev[type], ...settings, accepted: true },
      message: null,
      visible: false,
      type: null,
      processed: true,
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
