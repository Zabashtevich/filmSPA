import React from "react";
import { createPortal } from "react-dom";
import { CSSTransition } from "react-transition-group";

import { AccountRoot, AccountList } from "../../components";
import useAuthListener from "../../hooks/useAuthListener";
import {
  ConfirmPopupContainer,
  EditModalContainer,
  ErrorModalContainer,
  UtilityModalContainer,
} from "../";
import {
  AccountCreateList,
  AccountListItem,
  AccountListPlaceholder,
} from "./auxillary";
import { useAuthContext, useModalContext } from "../../context";
import { useParams } from "react-router-dom";

export default function AccountRootContainer() {
  const [user, userLoading] = useAuthListener();
  const [modalstate, modalinterface] = useModalContext();
  const { showModal } = modalinterface;

  return (
    <>
      <UtilityModalContainer />
      <AccountRoot>
        {!userLoading && (
          <AccountRoot.PosterColumn>
            <AccountRoot.Avatar
              src={user.photoURL}
              onClick={() => showModal("ahaha ahagdsfg ahsadf afd", "warning")}
            />
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
          <AccountList></AccountList>
          <AccountRoot.Wrapper>
            <AccountRoot.Subtitle>Your grades:</AccountRoot.Subtitle>
          </AccountRoot.Wrapper>
        </AccountRoot.ContentColumn>
      </AccountRoot>
    </>
  );
}
