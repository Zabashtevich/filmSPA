import { createContext, useState } from "react";
import { firebase } from "../../libs/firebase";

export const ModalContext = createContext(null);

export default function ModalContextProvider({ children }) {
  const [state, setState] = useState({
    accepted: false,
    visible: false,
    message: null,
    type: null,
    title: null,
    value: null,
  });

  return (
    <ModalContext.Provider value={[state, setState]}>
      {children}
    </ModalContext.Provider>
  );
}
