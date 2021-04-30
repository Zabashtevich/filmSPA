import React from "react";

import { NavContainer } from "./../";
import { Userlist } from "../../components";
import { useSelector } from "react-redux";

export default function UserlistContainer() {
  const { userDataLoading, loggedIn, lists } = useSelector(
    (state) => state.userData,
  );

  return (
    <Userlist>
      <NavContainer loading={userDataLoading} lists={lists} />
    </Userlist>
  );
}
