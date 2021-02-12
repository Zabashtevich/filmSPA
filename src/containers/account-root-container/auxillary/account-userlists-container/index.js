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
            <AccountUserlists.Item>
              <AccountUserlists.Thumbnail />
              <AccountUserlists.Wrapper>
                <AccountUserlists.Row>
                  <AccountUserlists.Title>name:</AccountUserlists.Title>
                  <AccountUserlists.Content>
                    {item.name}
                  </AccountUserlists.Content>
                </AccountUserlists.Row>
                <AccountUserlists.Row>
                  <AccountUserlists.Title>amount:</AccountUserlists.Title>
                  <AccountUserlists.Content>
                    {item.content.length}
                  </AccountUserlists.Content>
                </AccountUserlists.Row>
                <AccountUserlists.Row>
                  <AccountUserlists.Rename />
                  <AccountUserlists.Delete />
                </AccountUserlists.Row>
              </AccountUserlists.Wrapper>
            </AccountUserlists.Item>
          );
        })}
      {}
      {}
    </AccountUserlists>
  );
}
