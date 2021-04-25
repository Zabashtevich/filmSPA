import React, { useState } from "react";

import { Userlist } from "../../../components";

export default function UserlistList({ list }) {
  const [value, setValue] = useState(list.name);
  const [disabled, setDisabled] = useState(true);

  return (
    <Userlist.List>
      <Userlist.Thumbnail />
      <Userlist.Outer>
        <Userlist.Row>
          <Userlist.Input disabled value={value} />
          <Userlist.Subrow>
            <Userlist.Subtitle>created at:</Userlist.Subtitle>
            <Userlist.Date>2020</Userlist.Date>
          </Userlist.Subrow>
        </Userlist.Row>
        <Userlist.Wrapper>
          <Userlist.Confirm />
          <Userlist.Cancel />
        </Userlist.Wrapper>
      </Userlist.Outer>
      <Userlist.Edit />
    </Userlist.List>
  );
}
