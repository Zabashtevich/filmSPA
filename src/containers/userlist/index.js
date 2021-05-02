import React, { useState } from "react";
import { useSelector } from "react-redux";

import { CreateUserlistContainer, NavContainer } from "./../";
import { Userlist } from "../../components";
import UserlistFavorite from "./items/userlist-favorite";
import UserlistItem from "./items/userlist-item";

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
      {bar.activeCategory === "userlists" && (
        <UserlistItem
          list={lists.userlists.find((item) => item.id === bar.activeList)}
        />
      )}
    </Userlist>
  );
}
