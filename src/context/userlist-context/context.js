import React, { createContext, useState } from "react";

export const UserlistContext = createContext(null);

export default function UserlistContextProvider({ children }) {
  const [state, setState] = useState({ type: null, userlist: null });

  return (
    <UserlistContext.Provider value={[state, setState]}>
      {children}
    </UserlistContext.Provider>
  );
}
