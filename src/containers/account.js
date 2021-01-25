import React, { useState, useEffect, useContext } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import { AuthContext } from "../context/auth-context";
import { createListLogic, deleteList } from "../utils/firebase";

import { Account, AccountList } from "./../components";
import useAuthLisner from "./../hooks/useAuthListener";
import useFirestore from "./../hooks/useFirestore";
import {
  ConfirmPopupContainer,
  EditModalContainer,
  ErrorModalContainer,
} from "./auxillary/auxillary-containers";
import {
  AccountCreateList,
  AccountListItem,
  AccountListPlaceholder,
} from "./auxillary/auxillary-items";

export default function AccountContainer() {
  const { user } = useAuthLisner();
  const [loadingData, data] = useFirestore(user.displayName, "collection");
  const { firebase } = useContext(AuthContext);

  const [popupConfirmVisible, setPopupConfirmVisible] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState("");
  const [deletingList, setDeletingList] = useState({ id: "", delete: false });
  const [dataSubmiting, setDataSubmiting] = useState(false);
  const [creatingList, setCreatingList] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [errorModalVisible, setErrorModalVisible] = useState(false);
  const [placeholderDeelay, setPlaceholderDeelay] = useState(false);
  const [itemDeelay, setItemDeelay] = useState(false);
  const [editModalVisible, setEditModalVisible] = useState(false);
  const [editModalText, setEditModalText] = useState("");

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
    setDeletingList((prev) => ({ ...prev, delete: value }));
    setConfirmMessage("");
    setPopupConfirmVisible(false);
  };

  const showErrorModal = (errorText) => {
    document.body.style.overflow = "hidden";
    setErrorMessage([errorText]);
    setErrorModalVisible(true);
  };

  const hideErrorModal = () => {
    document.body.style.overflow = "auto";
    setErrorMessage(null);
    setErrorModalVisible(false);
  };

  const creatListToogler = (e) => {
    if (dataSubmiting) {
      return;
    } else {
      if (data.length === 5) {
        showErrorModal("Sorry but now you can create ony 5 lists");
        return;
      }
      if (
        e.target.classList.value.includes("Abort") ||
        e.target.classList.value.includes("CreateIcon")
      ) {
        setCreatingList((prev) => !prev);
      }
    }
  };

  const createListSubmit = (e) => {
    if (!e.target.classList.value.includes("Confirm")) return;
    setCreatingList(false);
    setDataSubmiting(true);
    if (inputValue.length > 20) {
      showErrorModal("Name can be max 20 characters long");
      setDataSubmiting(false);
    } else if (inputValue.length === 0 || inputValue.length < 3) {
      showErrorModal("Name should be at least 4 characters long");
      setDataSubmiting(false);
    } else {
      createListLogic(firebase, inputValue, data, user.displayName).then(() => {
        setInputValue("");
        setDataSubmiting(false);
      });
    }
  };
  return (
    <>
      {!editModalVisible &&
        createPortal(
          <EditModalContainer text={editModalText} visible={1} />,
          document.querySelector("#root"),
        )}
      {errorModalVisible &&
        createPortal(
          <ErrorModalContainer
            errorMessage={errorMessage}
            closeModal={hideErrorModal}
            errorModalVisible={errorModalVisible}
          />,
          document.querySelector("#root"),
        )}
      {popupConfirmVisible &&
        createPortal(
          <ConfirmPopupContainer
            message={confirmMessage}
            closeConfirmWindow={closeConfirmWindow}
            popupConfirmVisible={popupConfirmVisible}
          />,
          document.querySelector("#root"),
        )}
      <Account>
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
              !placeholderDeelay &&
              data.length > 0 &&
              data.map((item, i) => {
                return (
                  <CSSTransition
                    classNames="fade"
                    timeout={{ enter: 500, exit: 600, appear: 500 }}
                    appear={true}
                    key={item.id}
                    onEnter={() => setItemDeelay(true)}
                    onExited={() => setItemDeelay(false)}
                    unmountOnExit
                    mountOnEnter
                  >
                    <AccountListItem
                      onListDelete={onListDelete}
                      i={i}
                      item={item}
                    />
                  </CSSTransition>
                );
              })}
            <AccountListPlaceholder
              visible={!loadingData && data.length === 0 && !itemDeelay}
              setPlaceholderDeelay={setPlaceholderDeelay}
            />
            {data.length <= 5 && (
              <AccountCreateList
                creatingList={creatingList}
                creatListToogler={creatListToogler}
                inputValue={inputValue}
                setInputValue={setInputValue}
                createListSubmit={createListSubmit}
              />
            )}
          </AccountList>
        </Account.ColumnContainer>
      </Account>
    </>
  );
}
