import { useContext } from "react";
import { ModalContext } from "./context";

export default function useModalContext() {
  const [modalstate, modalinterface] = useContext(ModalContext);
  return [modalstate, modalinterface];
}
