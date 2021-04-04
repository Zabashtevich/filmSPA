import React from "react";

import { CreditsContainer } from "./../../";
import { Userlist } from "../../../components";

export default function List() {
  return (
    <>
      <Userlist.Title>Your list Hahha</Userlist.Title>
      <Userlist.Header>
        <Userlist.Wallpaper />
        <Userlist.Row>
          <Userlist.Fieldname>List name:</Userlist.Fieldname>
          <Userlist.Fieldvalue>Hahha</Userlist.Fieldvalue>
        </Userlist.Row>
        <Userlist.Row>
          <Userlist.Fieldname>Created at:</Userlist.Fieldname>
          <Userlist.Fieldvalue>2020</Userlist.Fieldvalue>
        </Userlist.Row>
        <Userlist.Edit />
      </Userlist.Header>
      {/* <CreditsContainer /> */}
    </>
  );
}
