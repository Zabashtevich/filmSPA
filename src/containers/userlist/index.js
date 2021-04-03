import React from "react";

import { useUserlistContext } from "./../../context";
import { Userlist } from "../../components";

export default function UserlistContainer() {
  const [{ type, userlist }] = useUserlistContext();

  return;
}
