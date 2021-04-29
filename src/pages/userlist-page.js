import React from "react";
import { useSelector } from "react-redux";

import {
  MenuContainer,
  ModalContainer,
  UserlistContainer,
} from "../containers";

export default function UserlistPage() {
  const { userDataLoading, profile, lists } = useSelector(
    (state) => state.userData,
  );

  return (
    <>
      <ModalContainer />
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100vh",
        }}
      >
        <MenuContainer lists={lists} loading={userDataLoading} />
        <UserlistContainer />
      </div>
    </>
  );
}
