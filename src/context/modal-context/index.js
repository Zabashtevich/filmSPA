import { useContext } from "react";
import { ModalContext } from "./context";

export default function userModalContext() {
  const [state, setState] = useContext(ModalContext);
  return [state, setState];
}
