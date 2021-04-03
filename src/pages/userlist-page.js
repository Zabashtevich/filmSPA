import React from "react";

import { MenuContainer, UserlistContainer } from "../containers";
import UserlistContextProvider from "../context/userlist-context/context";

export default function UserlistPage() {
  return (
    <UserlistContextProvider>
      <div style={{ display: "flex" }}>
        <MenuContainer />
        <UserlistContainer />
      </div>
    </UserlistContextProvider>
  );
}
