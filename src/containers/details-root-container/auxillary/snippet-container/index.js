import React, { useState } from "react";

import { Snippet } from "../../../../components";
import { SnippetCreate, SnippetItem } from "./items/snippet-item";

export default function SnippetContainer({ userlists = [] }) {
  const [popupVisible, setPopupVisible] = useState(false);

  function popupToggler(event) {
    if (event.target.classList.value.includes("Userlist")) {
      setPopupVisible((prev) => !prev);
    }
  }

  return (
    <>
      <Snippet>
        <Snippet.Userlist onClick={(e) => popupToggler(e)} />
      </Snippet>
      <Snippet>
        <Snippet.Favorite />
        <Snippet.Container visible={popupVisible}>
          {userlists.map((item) => {
            return <SnippetItem />;
          })}
          <SnippetCreate />
        </Snippet.Container>
      </Snippet>
    </>
  );
}
