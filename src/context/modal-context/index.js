import { useContext } from "react";
import { ModalContext } from "./context";

export default function useModalContext() {
  const [state, setState] = useContext(ModalContext);
  return [state, setState];
}
