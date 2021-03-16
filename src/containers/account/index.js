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
          <Account.Wrapper>
            <Account.Subtitle>Your lists</Account.Subtitle>
            <Account.Link>
              Settings
              <Account.Linkicon />
            </Account.Link>
          </Account.Wrapper>
          <Account.List>
            {!loading &&
              userlists.length > 1 &&
              userlists.map((item) => {
                console.log(item);
                return (
                  <Account.Item key={item.id}>
                    <Account.Thumbnail src="./assets/images/list-placeholder.png" />
                    <Account.Info>
                      <Account.Name>{item.name}</Account.Name>
                      <Account.Amount>{item.content.length}</Account.Amount>
                    </Account.Info>
                    <Account.Settings />
                  </Account.Item>
                );
              })}
            {!loading && userlists.length === 1 && <Account.Placeholder />}
          </Account.List>
        </Account.Section>
      </Account.Column>
    </Account>
  );
}
