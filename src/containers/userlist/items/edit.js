import React from "react";
import { Userlist } from "../../../components";

export default function Edit() {
  return (
    <Userlist>
      <Userlist.Title>Settings</Userlist.Title>
      <Userlist.Input />
      <Userlist.Wrapper>
        <Userlist.Cancel></Userlist.Cancel>
        <Userlist.Confirm></Userlist.Confirm>
      </Userlist.Wrapper>
    </Userlist>
  );
}
