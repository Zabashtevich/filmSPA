import React from "react";

import { CreditsContainer } from "./../../";
import { Userlist } from "../../../components";
import { getCorrectDate } from "../../../utils";

export default function List({ userlist }) {
  const date = userlist?.date ?? false;

  return (
    <>
      <Userlist.Title>Your list Hahha</Userlist.Title>
      <Userlist.Header>
        <Userlist.Wallpaper />
        <Userlist.Info>
          <Userlist.Row>
            <Userlist.Fieldname>List name:</Userlist.Fieldname>
            <Userlist.Fieldvalue>{userlist.name}</Userlist.Fieldvalue>
          </Userlist.Row>
          {date && (
            <Userlist.Row>
              <Userlist.Fieldname>Created at:</Userlist.Fieldname>
              <Userlist.Fieldvalue>{getCorrectDate(date)}</Userlist.Fieldvalue>
            </Userlist.Row>
          )}
          <Userlist.Row>
            <Userlist.Fieldname>Amount:</Userlist.Fieldname>
            <Userlist.Fieldvalue>{userlist.content.length}</Userlist.Fieldvalue>
          </Userlist.Row>
        </Userlist.Info>
        <Userlist.Edit title="edit list" />
      </Userlist.Header>
      <CreditsContainer />
    </>
  );
}
