import { useContext } from "react";
import { AccountMetalogicContext } from "./context";

export default function useAccountMetalogicContext() {
  const [accountState, accountinterface] = useContext(AccountMetalogicContext);
  return [accountState, accountinterface];
}
