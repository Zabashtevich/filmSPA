import React, { createContext, useState } from "react";

export const ProcessContext = createContext(null);

export default function ProcessContextProvider({ children }) {
  const [state, setState] = useState({
    processing: false,
    message: null,
  });

  return (
    <ProcessContext.Provider value={[state, setState]}>
      {children}
    </ProcessContext.Provider>
  );
}
