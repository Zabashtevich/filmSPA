import React from "react";
import { useSelector } from "react-redux";

import { Account } from "../../components";

export default function AccountContainer() {
  const { profile, profileLoading } = useSelector((state) => state.userProfile);

  return (
    <Account>
      {!profileLoading && (
        <Account.Column type="poster">
          <Account.Poster src={profile.photoURL} />
          <Account.Nickname></Account.Nickname>
          <Account.List>
            Your lists
            <Account.Settings />
          </Account.List>
        </Account.Column>
      )}
      <Account.Column type="content">
        <Account.Title>Your profile activity</Account.Title>
      </Account.Column>
    </Account>
  );
}
