import React, { useState, useRef } from "react";

import { Snippet } from "./../../../../../components";

export default function SnippetCreate() {
  const [inputValue, setInputValue] = useState("");
  const [editActive, setEditActive] = useState(false);
  const [delay, setDelay] = useState({
    editButtons: true,
    defaultButtons: false,
  });

  const inputRef = useRef(null);

  const { editButtons, defaultButtons } = delay;

  function createList() {
    if (inputValue.length < 5 || inputValue.length > 20) {
      return;
    }
    //TODO CREATE LIST LOGIC
  }

  return (
    <Snippet.Item>
      <Snippet.Create editActive={editActive} />
      <Snippet.Name
        placeholder={"Create list"}
        disabled={!editActive}
        inputRef={inputRef}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Snippet.Edit
        visible={!editActive && !defaultButtons}
        setDelay={setDelay}
        onClick={() => setEditActive(true)}
      />
      <Snippet.Ok
        visible={editActive && !editButtons}
        setDelay={setDelay}
        description={"List name length can be min 5 and max 10 symbols"}
        disable={(inputValue.length < 5 && 1) || (inputValue.length >= 11 && 1)}
        onClick={createList}
      />
      <Snippet.Cancel
        visible={editActive && !editButtons}
        onClick={() => setEditActive(false)}
        setDelay={setDelay}
      />
    </Snippet.Item>
  );
}
