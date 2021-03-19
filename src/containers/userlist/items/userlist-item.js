import React, { useEffect, useRef, useState } from "react";

import { Userlist } from "../../../components";
import { ModalContainer } from "./../../";

export default function UserlistItem({ item }) {
  const [editActive, setEditActive] = useState(false);
  const [value, setValue] = useState(item.name);
  const inputRef = useRef();

  useEffect(() => {
    console.log(inputRef);
  }, []);

  return (
    <Userlist.Item>
      <ModalContainer />
      <Userlist.Thumbnail />
      <Userlist.Info>
        <Userlist.Inner>
          <Userlist.Name
            value={value}
            editable={editActive && 1}
            inputRef={inputRef}
            onChange={(e) => setValue(e.target.value)}
          />
          <Userlist.Confirm visible={editActive && 1} />
          <Userlist.Decline
            visible={editActive && 1}
            onClick={() => setEditActive(false)}
          />
        </Userlist.Inner>
        <Userlist.Row>
          <Userlist.Subtitle>amount of movies:</Userlist.Subtitle>
          <Userlist.Amount>{item.content.length}</Userlist.Amount>
        </Userlist.Row>
      </Userlist.Info>
      <Userlist.Wrapper>
        <Userlist.Edit
          onClick={() => {
            setEditActive(true);
            inputRef.current.focus();
          }}
        />
        <Userlist.Delete />
      </Userlist.Wrapper>
    </Userlist.Item>
  );
}
