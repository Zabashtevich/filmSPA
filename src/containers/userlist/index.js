import React, { useState } from "react";

import { CreateUserlistContainer, NavContainer } from "./../";
import { Userlist } from "../../components";
import { useSelector } from "react-redux";

export default function UserlistContainer() {
  const [bar, setBar] = useState({
    activeCategory: "createList",
    activeList: null,
  });
  const { userDataLoading, lists } = useSelector((state) => state.userData);

  return (
    <Userlist>
      <NavContainer
        loading={userDataLoading}
        lists={lists}
        setBar={setBar}
        bar={bar}
      />
      {bar.activeCategory === "createList" && (
        <CreateUserlistContainer loading={userDataLoading} lists={lists} />
      )}
    </Userlist>
  );
}
