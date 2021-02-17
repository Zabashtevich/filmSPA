import { useContext } from "react";
import { AccountMetalogicContext } from "./constants";

export default function useAccountMetalogicContext() {
  const [accountState, accountinterface] = useContext(AccountMetalogicContext);
  return [accountState, accountinterface];
}
