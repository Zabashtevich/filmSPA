import React from "react";

import { AccountRoot } from "../../components";
import useAuthListener from "../../hooks/useAuthListener";
import { UtilityModalContainer } from "../";
import { useSelector } from "react-redux";

export default function AccountRootContainer() {
  const [user, userLoading] = useAuthListener();
  const userData = useSelector((store) => store.userData);

  const { userlists, loading } = userData;
  return (
    <>
      <UtilityModalContainer />
      <AccountRoot>
        {!userLoading && (
          <AccountRoot.PosterColumn>
            <AccountRoot.Avatar src={user.photoURL} />
            <AccountRoot.Nickname>{user.displayName}</AccountRoot.Nickname>
            <AccountRoot.Link to={`${user.displayName}/edit`}>
              Edit profile
            </AccountRoot.Link>
          </AccountRoot.PosterColumn>
        )}
        <AccountRoot.ContentColumn>
          <AccountRoot.Title>YOUR PROFILE ACTIVITY</AccountRoot.Title>
          <AccountRoot.Subtitle>your lists:</AccountRoot.Subtitle>
          <AccountRoot.Userlist>
            {!loading &&
              userlists.map((item) => {
                return (
                  <AccountRoot.Item key={item.id}>
                    <AccountRoot.Icon />
                    <AccountRoot.Info>
                      <AccountRoot.Row>
                        <AccountRoot.Name>name:</AccountRoot.Name>
                        <AccountRoot.Content>{item.name}</AccountRoot.Content>
                      </AccountRoot.Row>
                      <AccountRoot.Row>
                        <AccountRoot.Name>amount:</AccountRoot.Name>
                        <AccountRoot.Content>
                          {item.content.length}
                        </AccountRoot.Content>
                      </AccountRoot.Row>
                    </AccountRoot.Info>
                  </AccountRoot.Item>
                );
              })}
          </AccountRoot.Userlist>
        </AccountRoot.ContentColumn>
      </AccountRoot>
    </>
  );
}
