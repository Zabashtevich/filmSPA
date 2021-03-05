import { useContext } from "react";
import { TrailerContext } from "./context";

export default function useTrailerContext() {
  const [props, setProps] = useContext(TrailerContext);
  return [props, setProps];
}
