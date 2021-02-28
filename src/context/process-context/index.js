import { useContext } from "react";
import { ProcessContext } from "./context";

export default function useProcessContext() {
  const [state, logic] = useContext(ProcessContext);
  return [state, logic];
}
