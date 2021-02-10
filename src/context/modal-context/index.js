import { useContext } from "react";
import { ModalContext } from "./context";

export default function useModalContext() {
  const [accepted, visible, acceptModal, showModal, closeModal] = useContext(
    ModalContext,
  );
  return [accepted, visible, acceptModal, showModal, closeModal];
}
