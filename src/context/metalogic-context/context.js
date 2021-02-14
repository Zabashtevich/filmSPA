import React, { createContext, useEffect } from "react";
import { useSelector } from "react-redux";

import { useModalContext } from "../";

export const MetalogicContext = createContext(null);

export default function MetalogicContextProvider({ children }) {
  const userData = useSelector((store) => store.userData);

  const [modalstate, modalinterface] = useModalContext();
  const { remove, rename, newlist } = modalstate;
  const { refreshModal } = modalinterface;

  console.log(userData);

  function removeList(id) {}

  useEffect(() => {
    if (remove.accepted) {
    }
  }, [remove]);

  useEffect(() => {}, []);

  useEffect(() => {}, []);

  return (
    <MetalogicContext.Provider value={[]}>{children}</MetalogicContext.Provider>
  );
}
