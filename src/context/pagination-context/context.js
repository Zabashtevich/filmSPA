import React, { createContext, useState } from "react";

export const PaginationContext = createContext(null);

export default function PaginationContextProvider({ children }) {
  const [paginProps, setPaginProps] = useState({
    amount: null,
    length: null,
    active: 1,
    loading: true,
  });

  return (
    <PaginationContext.Provider value={[paginProps, setPaginProps]}>
      {children}
    </PaginationContext.Provider>
  );
}
