import React, { createContext, useState } from "react";

export const CreditsContext = createContext(null);

export default function CreditsContextProvider({ children }) {
  const [state, setState] = useState({ loading: false, array: null });

  return (
    <CreditsContext.Provider value={[state, setState]}>
      {children}
    </CreditsContext.Provider>
  );
}
