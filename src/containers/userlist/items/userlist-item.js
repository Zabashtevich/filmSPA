import React, { useState } from "react";
import { getCorrectDate } from "../../../utils";

import { Userlist } from "./../../../components";

export default function UserlistItem({ list }) {
  const [disabled, setDisabled] = useState(true);

  return (
    <Userlist.Container>
      <Userlist.Title>{`Your list ${list.name}`}</Userlist.Title>
      <Userlist.Header>
        <Userlist.Thumbnail />
        <Userlist.List>
          <Userlist.Input disabled={disabled} value={list.name} />
        </Userlist.List>
        <Userlist.Wrapper>
          <Userlist.Button type="confirm">Create</Userlist.Button>
          <Userlist.Button type="abort">Abort</Userlist.Button>
        </Userlist.Wrapper>
        <Userlist.Tools>
          <Userlist.Inner type="delete">
            <Userlist.Delete />
          </Userlist.Inner>
          <Userlist.Inner type="edit">
            <Userlist.Edit />
          </Userlist.Inner>
        </Userlist.Tools>
      </Userlist.Header>
    </Userlist.Container>
  );
}
