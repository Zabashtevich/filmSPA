import { useContext } from "react";
import { CreditsContext } from "./context";

export default function useCreditsContext() {
  return useContext(CreditsContext);
}
