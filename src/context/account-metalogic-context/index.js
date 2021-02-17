import { useContext } from "react";
import { AccountContext } from "./context";

export default function userAccountContext() {
  const [accountState, accountinterface] = useContext(AccountContext);
  return [accountState, accountinterface];
}
