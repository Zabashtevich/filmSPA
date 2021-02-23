import React from "react";

import { Snippet } from "../../../../../components";

export function SnippetItem({ name }) {
  return (
    <Snippet.Item>
      <Snippet.Circle>
        <Snippet.Inner>
          <Snippet.Add />
        </Snippet.Inner>
        <Snippet.Name value={name} disabled />
      </Snippet.Circle>
      <Snippet.Inner marginLeft={"auto"}>
        <Snippet.Edit />
      </Snippet.Inner>
      <Snippet.Inner>
        <Snippet.Delete />
      </Snippet.Inner>
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
