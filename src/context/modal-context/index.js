import { useContext } from "react";
import { ModalContext } from "./context";

export default function useModal() {
  const [state, controller] = useContext(ModalContext);
  return [state, controller];
}
