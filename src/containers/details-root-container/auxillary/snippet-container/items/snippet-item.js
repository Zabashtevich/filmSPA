import React, { useRef, useState, useEffect } from "react";

import { Snippet } from "../../../../../components";
import {
  useSnippetContext,
  useMetalogicContext,
  useModalContext,
} from "./../../../../../context";

export function SnippetItem({ name, id }) {
  const [inputValue, setInputValue] = useState(name);
  const [snippetSettings, setSnippetSettings] = useSnippetContext();
  const [metalogicInterface] = useMetalogicContext();
  const [modalProps, setModalProps] = useModalContext();
  const {
    editButtonsDelay,
    defaultButtonsDelay,
    editFormActive,
  } = snippetSettings;

  const { setUserlistProps } = metalogicInterface;
  const { showConfirmModal, showErrorModal } = setModalProps;
  const { accepted } = modalProps;

  const inputRef = useRef(null);

  function setFormActive() {
    setSnippetSettings((prev) => ({ ...prev, editFormActive: true }));
  }

  function setFormDisabled() {
    setSnippetSettings((prev) => ({ ...prev, editFormActive: false }));
  }

  function renameList() {
    name === inputValue
      ? showErrorModal("You did not change list name")
      : setUserlistProps({ type: "raname", value: { name: inputValue, id } });
  }

  useEffect(() => {
    if (editFormActive && !editButtonsDelay) {
      inputRef.current.focus();
    }
  }, [editFormActive, editButtonsDelay]);

  useEffect(() => {
    if (accepted) {
      setUserlistProps({ type: "delete", id });
    }
  }, [accepted]);

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
        onClick={() =>
          showConfirmModal(`Are you sure you want to delete "${name}" list?`)
        }
      />
      <Snippet.Ok
        visible={editFormActive && !editButtonsDelay}
        setSnippetSettings={setSnippetSettings}
        onClick={renameList}
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
