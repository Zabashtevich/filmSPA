import React, { useState, createContext } from "react";

export const ItemContext = createContext(null);

export default function ItemContextProvider({ children }) {
  const [item, setItem] = useState(null);

  return (
    <ItemContext.Provider value={[item, setItem]}>
      {children}
    </ItemContext.Provider>
  );
}
