import React, { useState, createContext } from "react";

export const ItemContext = createContext(null);

export default function ItemContextProvider({ children }) {
  const [{ loading, item }, setItem] = useState({ loading: true, item: null });

  return (
    <ItemContext.Provider value={[{ loading, item }, setItem]}>
      {children}
    </ItemContext.Provider>
  );
}
