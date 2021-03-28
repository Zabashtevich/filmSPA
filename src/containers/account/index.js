import React from "react";
import { useSelector } from "react-redux";

import { Account } from "../../components";
import { FilterContainer } from "../";

export default function AccountContainer() {
  const { profile, profileLoading } = useSelector((state) => state.userProfile);
  return (
    <Account>
      {!profileLoading && (
        <>
          <Account.Column>
            <Account.Poster src={profile.photoURL} />
            <Account.Nickname>{profile.displayName}</Account.Nickname>
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
