import React from "react";
import { useSelector } from "react-redux";

import { Account } from "../../components";

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
          </Account.Content>
        </>
      )}
    </Account>
  );
}
