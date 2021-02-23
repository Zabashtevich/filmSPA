import React from "react";

import { Snippet } from "../../../../../components";

export function SnippetItem({ name }) {
  return (
    <Snippet.Item>
      <Snippet.Circle>
        <Snippet.Add />
        <Snippet.Name value={name} disabled />
      </Snippet.Circle>
      <Snippet.Edit />
      <Snippet.Delete />
    </Snippet.Item>
  );
}

export function SnippetCreate() {
  return (
    <Snippet.Item>
      <Snippet.Circle>
        <Snippet.Create />
        <Snippet.Name placeholder={"Create new list"} />
      </Snippet.Circle>
      <Snippet.Ok />
      <Snippet.Cancel />
    </Snippet.Item>
  );
}
