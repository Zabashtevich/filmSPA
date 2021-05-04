import React from "react";
import { useSelector } from "react-redux";

import {
  AccountContainer,
  FooterContainer,
  HeaderContainer,
} from "../containers";

export default function AccountPage() {
  const { userDataLoading, profile, lists } = useSelector(
    (state) => state.userData,
  );

  return (
    <>
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
