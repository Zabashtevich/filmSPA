import React, { useRef, useState, useEffect } from "react";

import { Snippet } from "../../../../../components";

export function SnippetItem({ name }) {
  const [inputSettings, setInputSettings] = useState({
    value: name,
    disabled: true,
  });
  const [deelay, setDeelay] = useState(true);

  const inputRef = useRef(null);

  const { value, disabled } = inputSettings;

  useEffect(() => {
    if (!disabled) {
      inputRef.current.focus();
    }
  }, [disabled]);

  return (
    <Snippet.Item disabled={disabled && 1}>
      <Snippet.Circle disabled={disabled && 1}>
        <Snippet.Add disabled={disabled && 1} />
        <Snippet.Name
          value={value}
          onChange={(e) =>
            setInputSettings((prev) => ({ ...prev, value: e.target.value }))
          }
          disabled={disabled}
          inputRef={inputRef}
        />
      </Snippet.Circle>
      <Snippet.Edit
        visible={disabled}
        onClick={() =>
          setInputSettings((prev) => ({ ...prev, disabled: false }))
        }
        setDeelay={setDeelay}
      />
      <Snippet.Delete visible={disabled} setDeelay={setDeelay} />
      <Snippet.Ok visible={!disabled && !deelay} setDeelay={setDeelay} />
      <Snippet.Cancel
        visible={!disabled && !deelay}
        setDeelay={setDeelay}
        onClick={() =>
          setInputSettings((prev) => ({ ...prev, disabled: true }))
        }
      />
    </Snippet.Item>
  );
}

export function SnippetCreate() {
  return (
    <Snippet.Item>
      <Snippet.Circle>
        <Snippet.Create />
        <Snippet.Name placeholder={"Create new list"} disabled />
      </Snippet.Circle>
      <Snippet.Ok />
      <Snippet.Cancel />
    </Snippet.Item>
  );
}
