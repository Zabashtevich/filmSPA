import React, { createContext, useState } from "react";

export const TrailerContext = createContext(null);

export default function TrailerContextProvider({ children }) {
  const [props, setProps] = useState({ active: null, loading: true });

  return (
    <TrailerContext.Provider value={[props, setProps]}>
      {children}
    </TrailerContext.Provider>
  );
}
