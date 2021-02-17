import { createContext, useReducer } from "react";
import accountReducer, { initialState } from "./reducer";

export const AccountMetalogicContext = createContext(null);

export default function AccountMetalogicContextProvider({ children }) {
  const [accountState, metaDispatch] = useReducer(accountReducer, initialState);

  return (
    <AccountMetalogicContext.Provider value={[accountState, {}]}>
      {children}
    </AccountMetalogicContext.Provider>
  );
}
