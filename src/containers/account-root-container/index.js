import React from "react";
import { useSelector } from "react-redux";

import { AccountRoot } from "../../components";
import useAuthListener from "../../hooks/useAuthListener";
import { UtilityModalContainer } from "../";
import { UserlistContainer } from "./auxillary";

export default function AccountRootContainer() {
  const [user, userLoading] = useAuthListener();

  const userData = useSelector(({ userData }) => userData);
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
          {!loading &&
            userlists.map((item) => <UserListContainer item={item} />)}
        </AccountRoot.ContentColumn>
      </AccountRoot>
    </>
  );
}
