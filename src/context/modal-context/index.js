import { useContext } from "react";
import { ModalContext } from "./context";

export default function useModalContext() {
  const [state, modalinterface] = useContext(ModalContext);
  return [state, modalinterface];
}
