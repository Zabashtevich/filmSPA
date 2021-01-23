import React, { useState, useEffect, useContext } from "react";
import { createPortal } from "react-dom";
import { AuthContext } from "../context/auth-context";
import { deleteList } from "../utils/firebase";

import { Account, AccountList } from "./../components";
import useAuthLisner from "./../hooks/useAuthListener";
import useFirestore from "./../hooks/useFirestore";
import { ConfirmPopupContainer } from "./auxillary/auxillary-containers";
import { AccountListItem } from "./auxillary/auxillary-items";

export default function AccountContainer() {
  const { user } = useAuthLisner();
  const [loadingData, data] = useFirestore(user.displayName, "collection");
  const { firebase } = useContext(AuthContext);

  const [popupConfirmVisible, setPopupConfirmVisible] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState("");
  const [deletingList, setDeletingList] = useState({ id: "", delete: false });

  useEffect(() => {
    if (!deletingList.delete) return;
    deleteList(firebase, deletingList.id, data, user.displayName).then(() => {
      setDeletingList({ id: "", delete: false });
    });
  }, [deletingList.delete]);

  const onListDelete = (id, name) => {
    setDeletingList((prev) => ({ ...prev, id }));
    setConfirmMessage(`Are you sure you want to delete list ${name}?`);
    setPopupConfirmVisible(true);
  };

  const closeConfirmWindow = (value) => {
    console.log(value);
    setDeletingList((prev) => ({ ...prev, delete: value }));
    setConfirmMessage("");
    setPopupConfirmVisible(false);
  };

  return (
    <Account>
      {popupConfirmVisible &&
        createPortal(
          <ConfirmPopupContainer
            message={confirmMessage}
            closeConfirmWindow={closeConfirmWindow}
            popupConfirmVisible={popupConfirmVisible}
          />,
          document.querySelector("#root"),
        )}
      <Account.ColumnContainer leftcolumn={1}>
        <Account.Avatar src={user.photoURL} />
        <Account.Nickname>{user.displayName}</Account.Nickname>
        <Account.Link to={`${user.displayName}/edit`}>
          Edit profile
        </Account.Link>
      </Account.ColumnContainer>
      <Account.ColumnContainer>
        <Account.Title>YOUR ACTIVITY</Account.Title>
        <Account.Wrapper>
          <Account.Subtitle>Your lists:</Account.Subtitle>
        </Account.Wrapper>
        <AccountList>
          {!loadingData &&
            data &&
            data.map((item, i) => {
              return (
                <AccountListItem
                  key={item.id}
                  item={item}
                  i={i}
                  onListDelete={onListDelete}
                />
              );
            })}
        </AccountList>
      </Account.ColumnContainer>
    </Account>
  );
}
