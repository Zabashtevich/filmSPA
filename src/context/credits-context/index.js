import { useContext } from "react";
import { CreditsContext } from "./context";

export default function useCreditsContext() {
  const [state, setState] = useContext(CreditsContext);
  return [state, setState];
}
