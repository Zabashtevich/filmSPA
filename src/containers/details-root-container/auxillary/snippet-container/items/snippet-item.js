import React, { useRef, useState, useEffect } from "react";

import { Snippet } from "../../../../../components";
import {
  useSnippetContext,
  useMetalogicContext,
} from "./../../../../../context";

export function SnippetItem({ name }) {
  const [inputValue, setInputValue] = useState(name);
  const [snippetSettings, setSnippetSettings] = useSnippetContext();
  const [metalogicInterface] = useMetalogicContext();

  const {
    editButtonsDelay,
    defaultButtonsDelay,
    editFormActive,
  } = snippetSettings;

  const { setUserlistProps } = metalogicInterface;

  const inputRef = useRef(null);

  function setFormActive() {
    setSnippetSettings((prev) => ({ ...prev, editFormActive: true }));
  }

  function setFormDisabled() {
    setSnippetSettings((prev) => ({ ...prev, editFormActive: false }));
  }

  useEffect(() => {
    if (editFormActive && !editButtonsDelay) {
      inputRef.current.focus();
    }
  }, [editFormActive, editButtonsDelay]);

  return (
    <Snippet.Item>
      <Snippet.Add editFormActive={editFormActive && 1} />
      <Snippet.Name
        onChange={(e) => setInputValue(e.target.value)}
        disabled={!editFormActive && 1}
        inputRef={inputRef}
        value={inputValue}
      />
      <Snippet.Edit
        visible={!editFormActive && !defaultButtonsDelay}
        setSnippetSettings={setSnippetSettings}
        onClick={setFormActive}
      />
      <Snippet.Delete
        visible={!editFormActive && !defaultButtonsDelay}
        setSnippetSettings={setSnippetSettings}
      />
      <Snippet.Ok
        visible={editFormActive && !editButtonsDelay}
        setSnippetSettings={setSnippetSettings}
      />
      <Snippet.Cancel
        visible={editFormActive && !editButtonsDelay}
        setSnippetSettings={setSnippetSettings}
        onClick={setFormDisabled}
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
