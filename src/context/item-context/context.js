import React, { createContext, useState } from "react";

export const ItemContext = createContext(null);

export default function ItemContextProvider({ children }) {
  const [item, setItem] = useState({ item: null, loading: true });
  return (
    <ItemContext.Provider value={[item, setItem]}>
      {children}
    </ItemContext.Provider>
  );
}
