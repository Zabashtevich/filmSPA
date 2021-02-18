import { useReducer } from "react";

import { initialState, AccountMetalogicContext } from "./constants";
import accountReducer from "./reducer";

export default function AccountMetalogicContextProvider({ children }) {
  const [state, dispatch] = useReducer(accountReducer, initialState);

  return (
    <AccountMetalogicContext.Provider value={[state, {}]}>
      {children}
    </AccountMetalogicContext.Provider>
  );
}
