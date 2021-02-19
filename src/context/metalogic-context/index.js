import { useContext } from "react";
import { MetalogicContext } from "./context";

export default function useFilterContext() {
  const [metalogicInterface] = useContext(MetalogicContext);
  return [metalogicInterface];
}
