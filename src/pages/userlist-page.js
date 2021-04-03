import React from "react";

import { MenuContainer } from "../containers";
import UserlistContextProvider from "../context/userlist-context/context";

export default function UserlistPage() {
  return (
    <UserlistContextProvider>
      <MenuContainer />
    </UserlistContextProvider>
  );
}
