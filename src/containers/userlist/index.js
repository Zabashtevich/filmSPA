import React from "react";

import CreateList from "./items/create-list";
import Edit from "./items/edit";
import List from "./items/list";

import { useUserlistContext } from "./../../context";
import { Userlist } from "../../components";

export default function UserlistContainer() {
  const [{ type, userlist }] = useUserlistContext();

  return (
    <Userlist>
      <List />
      {/* <CreateList /> */}
      {/* <Edit /> */}
    </Userlist>
  );
}
