import React, { useState } from "react";

import { CreateUserlistContainer, NavContainer } from "./../";
import { Userlist } from "../../components";
import { useSelector } from "react-redux";
import UserlistFavorite from "./items/userlist-favorite";

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
      {bar.activeCategory === "favorites" && (
        <UserlistFavorite loading={userDataLoading} lists={lists} />
      )}
    </Userlist>
  );
}
