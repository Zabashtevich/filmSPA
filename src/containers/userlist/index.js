import React from "react";

import CreateList from "./items/create-list";
import { useUserlistContext } from "./../../context";
import { Userlist } from "../../components";

export default function UserlistContainer() {
  const [{ type, userlist }] = useUserlistContext();

  return (
    <Userlist>
      <CreateList />
    </Userlist>
  );
}
