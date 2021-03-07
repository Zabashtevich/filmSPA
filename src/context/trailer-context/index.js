import { useContext } from "react";
import { TrailerContext } from "./context";

export default function useTrailerContext() {
  const [state, logic] = useContext(TrailerContext);
  return [state, logic];
}
