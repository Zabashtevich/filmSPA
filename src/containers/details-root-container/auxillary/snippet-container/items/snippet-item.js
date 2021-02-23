import React, { useRef, useState, useEffect } from "react";

import { Snippet } from "../../../../../components";
import { useSnippetContext } from "./../../../../../context";

export function SnippetItem({ name }) {
  const [inputValue, setInputValue] = useState(name);
  const [snippetSettings, setSnippetSettings] = useSnippetContext();

  const { editDelay, defaultDelay, editFormActive } = snippetSettings;
  const inputRef = useRef(null);

  return (
    <Snippet.Item>
      <Snippet.Add />
      <Snippet.Name
        value={value}
        onChange={(e) =>
          setInputSettings((prev) => ({ ...prev, value: e.target.value }))
        }
        inputRef={inputRef}
      />
      <Snippet.Edit />
      <Snippet.Delete />
      <Snippet.Ok />
      <Snippet.Cancel />
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
