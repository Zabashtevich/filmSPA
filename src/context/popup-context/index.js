import { useContext } from "react";
import { PopupContext } from "./context";

export default function usePopupContext() {
  const [state, setState] = useContext(PopupContext);
  return [state, setState];
}
