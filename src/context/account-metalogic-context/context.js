import { createContext, useReducer } from "react";
import accountReducer, { initialState } from "./reducer";

export const AccountContext = createContext(null);

export default function AccountContextProvider({ children }) {
  const [accountState, metaDispatch] = useReducer(accountReducer, initialState);

  return (
    <AccountContext.Provider value={[accountState, {}]}>
      {children}
    </AccountContext.Provider>
  );
}
