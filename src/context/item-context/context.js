import React, { createContext, useState } from "react";

export const ItemContext = createContext(null);

export default function ItemContextProvider({ children }) {
  const [data, setData] = useState({ item: null, loading: true });

  function setItem(payload) {
    setData({ item: payload, loading: false });
  }

  function unsetItem() {
    setData({ item: null, loading: true });
  }

  return (
    <ItemContext.Provider value={[data, { setItem, unsetItem }]}>
      {children}
    </ItemContext.Provider>
  );
}
