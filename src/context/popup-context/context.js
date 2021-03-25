import React, { createContext, useState } from "react";

export const PopupContext = createContext(null);

export default function PopupContextProvider({ children }) {
  const [state, setState] = useState({
    visible: false,
    item: null,
    type: null,
  });

  return (
    <PopupContext.Provider value={[state, setState]}>
      {children}
    </PopupContext.Provider>
  );
}
