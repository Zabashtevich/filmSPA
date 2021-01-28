import React, { useState, useEffect, useContext } from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import { AuthContext } from "../context/auth-context";
import { deleteList, renameList } from "../utils/firebase";
import {
  closeModalSwitcher,
  createListSwitcher,
  showModalSwitcher,
} from "../utils/switcher";
import TabContainer from "./tab-container";
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
  const [tabFirst, setTabFirst] = useState({
    tabList: [],
    activeType: 0,
    title: "Sort by list:",
  });
  const [tabSecondary, setTabSecondary] = useState({
    tabList: [],
    activeType: 0,
    title: "Sort by list:",
  });
  const [dataSubmiting, setDataSubmiting] = useState(false);
  const [creatingList, setCreatingList] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [placeholderDeelay, setPlaceholderDeelay] = useState(false);
  const [itemDeelay, setItemDeelay] = useState(false);
  const [modal, setModal] = useState({
    confirm: false,
    confirmMessage: "",
    errorModal: false,
    errorMessage: "",
    editModal: false,
    edit: false,
    editName: "",
    editID: null,
    delete: false,
    deleteID: null,
  });

  useEffect(() => {
    if (!loadingData) {
      setTabFirst((prev) => ({ ...prev, tabList: data }));
    }
  }, [data]);
  useEffect(() => {
    if (modal.delete) {
      deleteList(firebase, modal.deleteID, data, user.displayName).then(() => {
        setModal({ deleteID: null, delete: false });
      });
    }
    if (modal.edit) {
      renameList(
        firebase,
        user.displayName,
        data,
        modal.editID,
        modal.editName,
      );
    }
  }, [modal]);

  const createToggler = (e) => {
    if (dataSubmiting) {
      return;
    } else {
      if (
        e.target.classList.value.includes("Abort") ||
        e.target.classList.value.includes("CreateIcon")
      ) {
        setCreatingList((prev) => !prev);
      }
    }
  };

  const createList = (event) => {
    createListSwitcher(
      event,
      setCreatingList,
      setDataSubmiting,
      inputValue,
      setModal,
      firebase,
      data,
      user.displayName,
      setInputValue,
    );
  };

  const showModal = ({ target, id, value }) => {
    document.body.style.overflow = "hidden";
    showModalSwitcher(target, id, value, setModal);
  };

  const closeModal = ({ target, value }) => {
    closeModalSwitcher(target, value, setModal);
    document.body.style.overflow = "auto";
  };

  return (
    <>
      {modal.editModal &&
        createPortal(
          <EditModalContainer
            text={"Enter new list name"}
            visible={modal.editModal}
            closeModal={closeModal}
          />,
          document.querySelector("#root"),
        )}
      {modal.errorModal &&
        createPortal(
          <ErrorModalContainer
            errorMessage={modal.errorMessage}
            closeModal={closeModal}
            errorModalVisible={modal.errorModal}
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
            <AccountCreateList
              visible={data.length <= 4 && !loadingData}
              creatingList={creatingList}
              createToggler={createToggler}
              inputValue={inputValue}
              setInputValue={setInputValue}
              createList={createList}
            />
          </AccountList>
          <Account.Wrapper>
            <Account.Subtitle>Your grades:</Account.Subtitle>
          </Account.Wrapper>
          <Account.Wrapper tabs={1}>
            <Account.TabInner>
              <TabContainer
                title={tabFirst.title}
                tabList={tabFirst.tabList}
                setActiveType={setTabFirst}
                activeType={tabFirst.activeType}
              />
            </Account.TabInner>
            <Account.TabInner>
              <TabContainer
                title={tabSecondary.title}
                tabList={tabSecondary.tabList}
                setActiveType={setTabSecondary}
                activeType={tabSecondary.activeType}
              />
            </Account.TabInner>
          </Account.Wrapper>
        </Account.ColumnContainer>
      </Account>
    </>
  );
}
