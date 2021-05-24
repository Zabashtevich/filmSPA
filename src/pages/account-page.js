import React from "react";
import { useSelector } from "react-redux";

import {
  AccountContainer,
  FooterContainer,
  HeaderContainer,
  ModalContainer,
  ProcessContainer,
} from "../containers";

export default function AccountPage() {
  const { userDataLoading, profile, lists } = useSelector(
    (state) => state.userData,
  );

  return (
    <>
      <ProcessContainer />
      <ModalContainer />
      <HeaderContainer />
      <AccountContainer
        loading={userDataLoading}
        profile={profile}
        votes={lists.votes}
      />
      <FooterContainer />
    </>
  );
}
