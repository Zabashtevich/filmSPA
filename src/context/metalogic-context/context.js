import React, { createContext, useEffect } from "react";
import { useSelector } from "react-redux";

import useAuthListener from "../../hooks/useAuthListener";
import { firebase } from "../../libs/firebase";
import { useModalContext } from "../";
import {
  createListLogic,
  removeLogic,
  renameLogic,
} from "../../utils/firebase-user-metalogic";

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
      renameLogic(
        firebase,
        rename.id,
        rename.name,
        userlists,
        user.displayName,
      ).then(() => refreshModal());
    }

    if (remove.accepted && !userLoading) {
      removeLogic(
        firebase,
        remove.target,
        remove.id,
        userlists,
        user.displayName,
      ).then(() => refreshModal());
    }

    if (newlist.accepted && !userLoading) {
      createListLogic(
        firebase,
        newlist.name,
        userlists,
        user.displayName,
      ).then(() => refreshModal());
    }
  }, [rename, remove, newlist]);

  return (
    <MetalogicContext.Provider value={[]}>{children}</MetalogicContext.Provider>
  );
}
