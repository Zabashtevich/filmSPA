import React, { useRef, useState, useEffect } from "react";

import { Snippet } from "../../../../../components";

export function SnippetItem({ name }) {
  const inputRef = useRef(null);

  const [inputSettings, setInputSettings] = useState({
    value: name,
    editActive: false,
  });
  const [delaySettings, setDelaySettings] = useState({
    editButtons: true,
    defaultButtons: false,
  });

  const { editButtons, defaultButtons } = delaySettings;
  const { value, editActive } = inputSettings;

  useEffect(() => {
    if (editActive) {
      inputRef.current.focus();
    }
  }, [editActive]);

  return (
    <Snippet.Item disabled={!editActive && 1}>
      <Snippet.Add disabled={!editActive && 1} />
      <Snippet.Name
        value={value}
        onChange={(e) =>
          setInputSettings((prev) => ({ ...prev, value: e.target.value }))
        }
        disabled={!editActive}
        inputRef={inputRef}
      />
      <Snippet.Edit
        visible={!editActive}
        onClick={() =>
          setInputSettings((prev) => ({ ...prev, editActive: true }))
        }
        setDelaySettings={setDelaySettings}
      />
      <Snippet.Delete
        visible={!editActive}
        setDelaySettings={setDelaySettings}
      />
      <Snippet.Ok
        visible={editActive && !editButtons}
        setDelaySettings={setDelaySettings}
      />
      <Snippet.Cancel
        visible={editActive && !editButtons}
        setDelaySettings={setDelaySettings}
        onClick={() =>
          setInputSettings((prev) => ({ ...prev, editActive: false }))
        }
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
