import React from "react";

import { Snippet } from "../../../../../components";

export function SnippetItem() {
  return (
    <Snippet.Item>
      <Snippet.Add />
      <Snippet.Name />
      <Snippet.Edit />
      <Snippet.Delete />
    </Snippet.Item>
  );
}

export function SnippetCreate() {
  return (
    <Snippet.Item>
      <Snippet.Create />
      <Snippet.Name />
      <Snippet.Ok />
      <Snippet.Cancel />
    </Snippet.Item>
  );
}
