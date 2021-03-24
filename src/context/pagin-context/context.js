import React, { createContext, useState } from "react";

export const PaginContext = createContext(null);

export default function PaginContextProvider({ children }) {
  const [state, setState] = useState({
    active: 1,
    amount: null,
    visible: false,
  });

  return (
    <PaginContext.Provider value={[state, setState]}>
      {children}
    </PaginContext.Provider>
  );
}
