import { createContext, useReducer } from "react";
import modalReducer, { initialState } from "./reducer";
export const ModalContext = createContext(null);

export default function ModalContextProvider({ children }) {
  const [state, dispatch] = useReducer(modalReducer, initialState);

  return <ModalContext.Provider value={[]}>{children}</ModalContext.Provider>;
}
