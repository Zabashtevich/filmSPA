import { useContext } from "react";
import { MetalogicContext } from "./context";

export default function useMetalogicContext() {
  const [metalogicInterface] = useContext(MetalogicContext);
  return [metalogicInterface];
}
