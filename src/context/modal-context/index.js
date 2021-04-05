import { useContext } from "react";
import { ModalContext } from "./context";

export default function useModalContext() {
  const [state, controller] = useContext(ModalContext);
  return [state, controller];
}
