import React, { createContext, useState } from "react";

export const UserlistContext = createContext(null);

export default function UserlistContextProvider({ children }) {
  const [state, setState] = useState({
    value: null,
    type: "createList",
  });

  return (
    <UserlistContext.Provider value={[state, setState]}>
      {children}
    </UserlistContext.Provider>
  );
}
