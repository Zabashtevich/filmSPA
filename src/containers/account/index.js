import React from "react";
import { useSelector } from "react-redux";

import { Account } from "../../components";

export default function AccountContainer() {
  const { userlists, loading } = useSelector((state) => state.userData);
  return (
    <Account>
      <Account.Column>
        <Account.Poster />
        <Account.Nickname></Account.Nickname>
        <Account.Edit></Account.Edit>
      </Account.Column>
      <Account.Column>
        <Account.Title>Your profile activity</Account.Title>
        <Account.Section>
          <Account.Subtitle></Account.Subtitle>
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
