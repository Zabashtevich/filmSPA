import React from "react";

import { Snippet } from "../../../../../components";

export function SnippetItem({ name }) {
  return (
    <Snippet.Item>
      <Snippet.Circle>
        <Snippet.Add />
        <Snippet.Name value={name} disabled />
      </Snippet.Circle>
      <Snippet.Wrapper>
        <Snippet.Edit />
        <Snippet.Delete />
      </Snippet.Wrapper>
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
