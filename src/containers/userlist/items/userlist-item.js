import React, { useState } from "react";

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
          <Userlist.Info>
            <Userlist.Subtitle>created at:</Userlist.Subtitle>
            <Userlist.Date></Userlist.Date>
          </Userlist.Info>
        </Userlist.List>
        <Userlist.Wrapper>
          <Userlist.Confirm />
          <Userlist.Cancel />
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
