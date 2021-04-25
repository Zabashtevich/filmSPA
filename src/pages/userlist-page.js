import React from "react";
import { useSelector } from "react-redux";

import { MenuContainer, UserlistContainer } from "../containers";

export default function UserlistPage() {
  const { loading, profile, lists } = useSelector((state) => state.userData);

  return (
    <>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
        }}
      >
        <MenuContainer lists={lists} loading={loading} />
        <UserlistContainer />
      </div>
    </>
  );
}
