import React from "react";
import { useSelector } from "react-redux";

import { MenuContainer, UserlistContainer } from "../containers";

export default function UserlistPage() {
  const { userlists, userDataLoading } = useSelector((state) => state.userData);
  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
        }}
      >
        <MenuContainer userlists={userlists} loading={userDataLoading} />
        <UserlistContainer />
      </div>
    </>
  );
}
