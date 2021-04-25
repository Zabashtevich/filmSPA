import React from "react";
import { useSelector } from "react-redux";

import { MenuContainer, UserlistContainer } from "../containers";

export default function UserlistPage() {
  const { userlists, userDataLoading } = useSelector((state) => state.userData);
  return (
    <>
      <MenuContainer userlists={userlists} loading={userDataLoading} />
      <UserlistContainer />
    </>
  );
}
