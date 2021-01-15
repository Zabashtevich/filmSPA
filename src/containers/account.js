import React from "react";

import { Account } from "./../components";

import useAuthLisner from "./../hooks/useAuthListener";

export default function AccountContainer() {
  const { user } = useAuthLisner();
  console.log(user);
  return (
    <Account>
      <Account.ColumnContainer leftcolumn={1}>
        <Account.Avatar src={user.photoURL} />
        <Account.Nickname>{user.displayName}</Account.Nickname>
      </Account.ColumnContainer>
      <Account.ColumnContainer></Account.ColumnContainer>
    </Account>
  );
}
