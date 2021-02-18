import { useContext } from "react";
import { AccountMetalogicContext } from "./constants";

export default function useAccountContext() {
  const [state, accountinterface] = useContext(AccountMetalogicContext);

  return [state, accountinterface];
}
