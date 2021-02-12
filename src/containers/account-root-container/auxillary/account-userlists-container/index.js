import React from "react";
import { useSelector } from "react-redux";
import { AccountUserlists } from "../../../../components";

export default function AccountUserlistsContainer() {
  const userData = useSelector(({ userData }) => userData);
  const { userlists, loading } = userData;

  return (
    <AccountUserlists>
      {!loading &&
        userlists.map((item) => {
          return (
            <AccountUserlists.List key={item.id}>
              <AccountUserlists.Thumbnail />
              <AccountUserlists.Wrapper>
                <AccountUserlists.Row>
                  <AccountUserlists.Title>name:</AccountUserlists.Title>
                  <AccountUserlists.Content>
                    {item.name.length > 8
                      ? item.name.slice(0, 8) + "..."
                      : item.name}
                  </AccountUserlists.Content>
                </AccountUserlists.Row>
                <AccountUserlists.Row>
                  <AccountUserlists.Title>amount:</AccountUserlists.Title>
                  <AccountUserlists.Content>
                    {item.content.length}
                  </AccountUserlists.Content>
                </AccountUserlists.Row>
                <AccountUserlists.Inner>
                  <AccountUserlists.Rename />
                  <AccountUserlists.Delete />
                </AccountUserlists.Inner>
              </AccountUserlists.Wrapper>
            </AccountUserlists.List>
          );
        })}
    </AccountUserlists>
  );
}
