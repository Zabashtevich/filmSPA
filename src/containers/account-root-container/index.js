import React from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import { AccountRoot, AccountList } from "../../components";
import useAuthListener from "../../hooks/useAuthListener";
import {
  ConfirmPopupContainer,
  EditModalContainer,
  ErrorModalContainer,
} from "../";
import {
  AccountCreateList,
  AccountListItem,
  AccountListPlaceholder,
} from "./auxillary";
import { useAuthContext } from "../../context";
import { useParams } from "react-router-dom";

export default function AccountRootContainer() {
  const [user, userLoading] = useAuthListener();
  return (
    <>
      {/* {modal.editModal &&
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
        )} */}
      <AccountRoot>
        {!userLoading && (
          <AccountRoot.PosterColumn>
            <AccountRoot.Avatar src={user.photoURL} />
            <AccountRoot.Nickname>{user.displayName}</AccountRoot.Nickname>
            <AccountRoot.Link to={`${user.displayName}/edit`}>
              Edit profile
            </AccountRoot.Link>
          </AccountRoot.PosterColumn>
        )}
        <AccountRoot.ContentColumn>
          <AccountRoot.Title>YOUR ACTIVITY</AccountRoot.Title>
          <AccountRoot.Wrapper>
            <AccountRoot.Subtitle>Your lists:</AccountRoot.Subtitle>
          </AccountRoot.Wrapper>
          <AccountList>
            {/* {!loadingData &&
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
            /> */}
          </AccountList>
          <AccountRoot.Wrapper>
            <AccountRoot.Subtitle>Your grades:</AccountRoot.Subtitle>
          </AccountRoot.Wrapper>
        </AccountRoot.ContentColumn>
      </AccountRoot>
    </>
  );
}
