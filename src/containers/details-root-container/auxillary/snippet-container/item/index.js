import React from "react";

import { Snippet } from "../../../../../components";

export default function SnippetPopup({
  visible,
  userlists = [{ name: "hahaha" }],
}) {
  return (
    <Snippet.Backdrop visible={visible}>
      {userlists.length === 0 && (
        <Snippet.Item>
          <Snippet.Placeholder />
        </Snippet.Item>
      )}
      {userlists.length > 0 &&
        userlists.map(({ name }, index) => {
          return (
            <Snippet.Item>
              <Snippet.Number>{index + 1}</Snippet.Number>
              <Snippet.Name>{name}</Snippet.Name>
              <Snippet.Inner>
                <Snippet.Button borderactive={1}>EDIT</Snippet.Button>
                <Snippet.Button borderactive={1}>ADD</Snippet.Button>
              </Snippet.Inner>
            </Snippet.Item>
          );
        })}
    </Snippet.Backdrop>
  );
}
