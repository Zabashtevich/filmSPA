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

  const [dataSubmiting, setDataSubmiting] = useState(false);
  const [creatingList, setCreatingList] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [placeholderDeelay, setPlaceholderDeelay] = useState(false);
  const [itemDeelay, setItemDeelay] = useState(false);
  const [modal, setModal] = useState({
    confirm: false,
    confirmMessage: "",
    error: false,
    errorMessage: "",
    editModal: false,
    edit: false,
    editID: null,
    delete: false,
    deleteID: null,
  });

  useEffect(() => {
    if (modal.delete) {
      deleteList(firebase, modal.deleteID, data, user.displayName).then(() => {
        setModal({ deleteID: null, delete: false });
      });
    }
    if (modal.edit) {
      //TODO rename logic
    }
  }, [modal]);

  const creatListToogler = (e) => {
    if (dataSubmiting) {
      return;
    } else {
      if (data.length === 5) {
        setModal((prev) => ({
          ...prev,
          errorMessage: "Sorry but now you can create ony 5 lists",
          error: true,
        }));
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
      setModal((prev) => ({
        ...prev,
        errorMessage: "Name can be max 20 characters long",
        error: true,
      }));
      setDataSubmiting(false);
    } else if (inputValue.length === 0 || inputValue.length < 3) {
      setModal((prev) => ({
        ...prev,
        errorMessage: "Name should be at least 4 characters long",
        error: true,
      }));
      setDataSubmiting(false);
    } else {
      createListLogic(firebase, inputValue, data, user.displayName).then(() => {
        setInputValue("");
        setDataSubmiting(false);
      });
    }
  };

  const showModal = ({ target, id, name }) => {
    document.body.style.overflow = "hidden";
    if (target === "delete") {
      setModal((prev) => ({
        ...prev,
        confirm: true,
        confirmMessage: `Are you sure you want to delete list ${name}?`,
        deleteID: id,
      }));
    } else if (target === "rename") {
      setModal((prev) => ({ ...prev, editModal: true, editID: id }));
    }
  };

  const closeModal = ({ target, value }) => {
    if (target === "confirm") {
      if (value) {
        setModal((prev) => ({
          ...prev,
          confirm: false,
          confirmMessage: "",
          delete: true,
        }));
      } else {
        setModal((prev) => ({
          ...prev,
          confirm: false,
          confirmMessage: "",
          delete: false,
          deleteID: null,
        }));
      }
    } else if (target === "edit") {
      if (value) {
        setModal((prev) => ({ ...prev, editModal: false, edit: true }));
      } else {
        setModal((prev) => ({
          ...prev,
          editModal: false,
          edit: false,
          editID: null,
        }));
      }
    }
  };

  return (
    <>
      {modal.editModal &&
        createPortal(
          <EditModalContainer
            text={"Enter new list name"}
            visible={modal.edit}
            closeModal={closeModal}
          />,
          document.querySelector("#root"),
        )}
      {modal.error &&
        createPortal(
          <ErrorModalContainer
            errorMessage={modal.errorMessage}
            closeModal={closeModal}
            errorModalVisible={modal.error}
          />,
          document.querySelector("#root"),
        )}
      {modal.confirm &&
        createPortal(
          <ConfirmPopupContainer
            message={modal.confirmMessage}
            closeConfirmWindow={closeModal}
            popupConfirmVisible={modal.confirm}
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
                    <AccountListItem i={i} item={item} showModal={showModal} />
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
