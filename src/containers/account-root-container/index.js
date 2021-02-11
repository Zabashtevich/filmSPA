import React from "react";

import { AccountRoot } from "../../components";
import useAuthListener from "../../hooks/useAuthListener";
import { UtilityModalContainer } from "../";
import { useSelector } from "react-redux";

export default function AccountRootContainer() {
  const [user, userLoading] = useAuthListener();
  const userData = useSelector((store) => store.userData);

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
          <AccountRoot.Userlist></AccountRoot.Userlist>
        </AccountRoot.ContentColumn>
      </AccountRoot>
    </>
  );
}
