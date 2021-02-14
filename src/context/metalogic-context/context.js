import React, { createContext, useEffect } from "react";
import { useSelector } from "react-redux";

import { useModalContext } from "../";

export const MetalogicContext = createContext(null);

export default function MetalogicContextProvider({ children }) {
  const userData = useSelector((store) => store.userData);
  const [modalstate, modalinterface] = useModalContext();

  return (
    <MetalogicContext.Provider value={[]}>{children}</MetalogicContext.Provider>
  );
}
