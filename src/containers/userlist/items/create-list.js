import React from "react";

import { Userlist } from "../../../components";

export default function CreateList() {
  return (
    <>
      <Userlist.Title>Create a new list</Userlist.Title>
      <Userlist.Subtitle>Enter a list name</Userlist.Subtitle>
      <Userlist.Input />
      <Userlist.Wrapper>
        <Userlist.Cancel>ABORT</Userlist.Cancel>
        <Userlist.Confirm>CONFIRM</Userlist.Confirm>
      </Userlist.Wrapper>
    </>
  );
}
