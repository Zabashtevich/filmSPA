import React from "react";

import { Userlist } from "../../../components";

export default function CreateList() {
  return (
    <Userlist>
      <Userlist.Title></Userlist.Title>
      <Userlist.Input />
      <Userlist.Wrapper>
        <Userlist.Cancel>Abort</Userlist.Cancel>
        <Userlist.Confirm>Confirm</Userlist.Confirm>
      </Userlist.Wrapper>
    </Userlist>
  );
}
