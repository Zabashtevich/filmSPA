import React, { useRef, useState, useEffect } from "react";

import { Snippet } from "../../../../../components";
import { useSnippetContext } from "./../../../../../context";

export function SnippetItem({ name }) {
  const [inputValue, setInputValue] = useState(name);
  const [snippetSettings, setSnippetSettings] = useSnippetContext();

  const {
    editButtonsDelay,
    defaultButtonsDelay,
    editFormActive,
  } = snippetSettings;

  const inputRef = useRef(null);

  return (
    <Snippet.Item editFormActive={editFormActive && 1}>
      <Snippet.Add editFormActive={editFormActive && 1} />
      <Snippet.Remove editFormActive={editFormActive && 1} />
      <Snippet.Name
        onChange={(e) => setInputValue(e.target.value)}
        editFormActive={editFormActive && 1}
        inputRef={inputRef}
        value={inputValue}
      />
      <Snippet.Edit
        visible={!editFormActive && !defaultButtonsDelay}
        setSnippetSettings={setSnippetSettings}
        onClick={() =>
          setSnippetSettings((prev) => ({ ...prev, editFormActive: true }))
        }
      />
      <Snippet.Delete
        visible={!editFormActive && !defaultButtonsDelay}
        setSnippetSettings={setSnippetSettings}
      />
      <Snippet.Ok
        visible={editFormActive && editButtonsDelay}
        setSnippetSettings={setSnippetSettings}
      />
      <Snippet.Cancel
        visible={editFormActive && editButtonsDelay}
        setSnippetSettings={setSnippetSettings}
      />
    </Snippet.Item>
  );
}

export function SnippetCreate() {
  return null;
  // <Snippet.Item>
  //   <Snippet.Circle>
  //     <Snippet.Create />
  //     <Snippet.Name placeholder={"Create new list"} disabled />
  //   </Snippet.Circle>
  //   <Snippet.Ok />
  //   <Snippet.Cancel />
  // </Snippet.Item>
}
