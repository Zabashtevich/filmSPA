import { useContext } from "react";
import { UtilityContext } from "./context";

export default function useUtilityContext() {
  const [state, controller] = useContext(UtilityContext);
  return [state, controller];
}
