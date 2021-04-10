import React from "react";
import { useSelector } from "react-redux";

import { Account } from "../../components";
import { FilterContainer } from "../";

export default function AccountContainer() {
  const { profileLoading, profile } = useSelector((state) => state.userProfile);

  return (
    <Account data-testid="account-container">
      {!profileLoading && (
        <>
          <Account.Column>
            <Account.Poster src={profile?.photoURL} alt="profile image" />
            <Account.Nickname>{profile?.displayName}</Account.Nickname>
          </Account.Column>
          <Account.Content>
            <Account.Title>YOUR PROFILE ACTIVITY</Account.Title>
            <FilterContainer />
          </Account.Content>
        </>
      )}
    </Account>
  );
}
