import React from "react";

import { Snippet } from "../../../../../components";

export default function SnippetPopup({ visible, userlists = [] }) {
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
                <Snippet.Edit />
                <Snippet.Remove />
              </Snippet.Inner>
              <Snippet.Popup>
                <Snippet.Title>Enter a list name</Snippet.Title>
                <Snippet.Wrapper>
                  <Snippet.Input />
                  <Snippet.Confirm />
                  <Snippet.Cancel />
                </Snippet.Wrapper>
              </Snippet.Popup>
            </Snippet.Item>
          );
        })}
    </Snippet.Backdrop>
  );
}
