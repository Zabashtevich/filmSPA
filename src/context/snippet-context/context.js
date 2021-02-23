import React, { createContext, useState } from "react";

export const SnippetContext = createContext(null);

export default function SnippetContextProvider({ children }) {
  const [state, setState] = useState({
    editDelay: true,
    defaultDelay: false,
    editFormActive: false,
  });

  return (
    <SnippetContext.Provider value={[state, setState]}>
      {children}
    </SnippetContext.Provider>
  );
}
