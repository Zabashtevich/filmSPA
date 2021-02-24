import { useContext } from "react";
import { MetalogicContext } from "./context";

export default function useMetalogicContext() {
  const [sucessFlags, metalogicInterface] = useContext(MetalogicContext);
  return [sucessFlags, metalogicInterface];
}
