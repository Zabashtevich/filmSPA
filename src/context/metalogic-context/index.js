import { useContext } from "react";
import { MetalogicContext } from "./context";

export default function useMetalogicContext() {
  const [metalogicState, metalogicInterface] = useContext(MetalogicContext);
  return [metalogicState, metalogicInterface];
}
