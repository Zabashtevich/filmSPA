import React, { useState } from "react";

import { Snippet } from "./../../../../../components";

export default function SnippetCreate() {
  const [inputValue, setInputValue] = useState("");
  const [inputDisabled, setInputDisabled] = useState(true);

  return (
    <Snippet.Item>
      <Snippet.Create />
      <Snippet.Name placeholder={"Create list"} disabled={inputDisabled} />
      <Snippet.Edit />
      <Snippet.Ok visible={true} />
      <Snippet.Cancel visible={true} />
    </Snippet.Item>
  );
}
