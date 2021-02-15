import React, { createContext, useEffect } from "react";
import { useSelector } from "react-redux";

import useAuthListener from "../../hooks/useAuthListener";
import { useModalContext } from "../";
import { createList, removeSwitcher, renameList } from "./../../utils";

export const MetalogicContext = createContext(null);

export default function MetalogicContextProvider({ children }) {
  const userData = useSelector((store) => store.userData);
  const [modalstate, modalinterface] = useModalContext();
  const [user, userLoading] = useAuthListener();

  const { userlists } = userData;
  const { remove, rename, newlist } = modalstate;
  const { refreshModal } = modalinterface;

  useEffect(() => {
    if (rename.accepted && !userLoading) {
      renameList(rename.id, rename.name, userlists, user.displayName).then(() =>
        refreshModal(),
      );
    }

    if (remove.accepted && !userLoading) {
      removeSwitcher(
        remove.target,
        remove.id,
        userlists,
        user.displayName,
      ).then(() => refreshModal());
    }

    if (newlist.accepted && !userLoading) {
      createList(newlist.name, userlists, user.displayName).then(() =>
        refreshModal(),
      );
    }
  }, [rename, remove, newlist]);

  return (
    <MetalogicContext.Provider value={[]}>{children}</MetalogicContext.Provider>
  );
}
