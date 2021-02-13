import React, { createContext } from "react";

export const MetalogicContext = createContext(null);

export default function MetalogicContextProvider({ children }) {
  return (
    <MetalogicContext.Provider value={{ null }}>
      {children}
    </MetalogicContext.Provider>
  );
}
