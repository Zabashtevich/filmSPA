import React from "react";
import { Userlist } from "../../../components";

export default function Edit() {
  return (
    <Userlist>
      <Userlist.Title>Settings</Userlist.Title>
      <Userlist.Subtitle>Enter a new list name</Userlist.Subtitle>
      <Userlist.Input />
      <Userlist.Wrapper>
        <Userlist.Cancel>DELETE</Userlist.Cancel>
        <Userlist.Confirm>RENAME</Userlist.Confirm>
      </Userlist.Wrapper>
    </Userlist>
  );
}
