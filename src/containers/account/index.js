import React from "react";
import { useSelector } from "react-redux";

import { Account } from "../../components";

export default function AccountContainer() {
  const { userlists, loading } = useSelector((state) => state.userData);
  const { profile, profileLoading } = useSelector((state) => state.userProfile);

  console.log(profile);

  return (
    <Account>
      <Account.Column type="poster">
        {!profileLoading && (
          <>
            <Account.Poster
              src={profile.photoURL || "./assets/images/profile.png"}
            />
            <Account.Nickname>{profile.displayName}</Account.Nickname>
          </>
        )}
      </Account.Column>
      <Account.Column type="content">
        <Account.Title>Your profile activity</Account.Title>
        <Account.Section>
          <Account.Subtitle>Your lists</Account.Subtitle>
          <Account.List>
            {!loading &&
              userlists.map((item) => (
                <Account.Item>
                  <Account.Thumbnail />
                  <Account.Info>
                    <Account.Name></Account.Name>
                    <Account.Amount></Account.Amount>
                  </Account.Info>
                  <Account.Settings />
                </Account.Item>
              ))}
          </Account.List>
        </Account.Section>
      </Account.Column>
    </Account>
  );
}
