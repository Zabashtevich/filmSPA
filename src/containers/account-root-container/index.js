import React from "react";

import { AccountRoot } from "../../components";
import useAuthListener from "../../hooks/useAuthListener";
import { UtilityModalContainer } from "../";

import { useModalContext } from "../../context";

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
          <AccountRoot.Wrapper>
            <AccountRoot.Subtitle>Your grades:</AccountRoot.Subtitle>
          </AccountRoot.Wrapper>
        </AccountRoot.ContentColumn>
      </AccountRoot>
    </>
  );
}
