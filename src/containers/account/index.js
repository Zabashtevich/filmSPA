import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Account } from "../../components";
import { AccountPosterSkeleton } from "./../../components/skeleton";

export default function AccountContainer() {
  const [delay, setDelay] = useState(true);
  const { profile, profileLoading } = useSelector((state) => state.userProfile);

  return (
    <Account>
      <Account.Column
        type="poster"
        visible={profileLoading}
        onExited={() => setDelay(false)}
      >
        <AccountPosterSkeleton />
      </Account.Column>
      {!profileLoading && !delay && (
        <Account.Column type="poster" visible={!profileLoading && !delay}>
          <Account.Poster src={profile.photoURL} />
          <Account.Nickname>{profile.displayName}</Account.Nickname>
          <Account.List>
            Your lists
            <Account.Settings />
          </Account.List>
        </Account.Column>
      )}
      <Account.Column type="content" visible={true}>
        <Account.Title>Your profile activity</Account.Title>
      </Account.Column>
    </Account>
  );
}
