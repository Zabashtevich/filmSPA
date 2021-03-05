import React, { createContext, useState } from "react";

export const ItemContext = createContext(null);

export default function ItemContextProvider({ children }) {
  const [data, setData] = useState({ item: null, loading: true });

  function setItem(payload) {
    setData({ item: payload, loading: false });
  }

  return (
    <ItemContext.Provider value={[data, setItem]}>
      {children}
    </ItemContext.Provider>
  );
}
