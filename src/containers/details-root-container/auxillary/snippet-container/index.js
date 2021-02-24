import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Snippet } from "../../../../components";
import SnippetItem from "./items/snippet-item";
import SnippetCreate from "./items/snippet-create";

export default function SnippetContainer() {
  const [popupVisible, setPopupVisible] = useState(false);

  const userData = useSelector((state) => state.userData);
  const { loading, userlists } = userData;

  function popupToggler(event) {
    if (event.target.classList.value.includes("Userlist")) {
      setPopupVisible((prev) => !prev);
    }
  }

  return (
    !loading && (
      <>
        <Snippet>
          <Snippet.Userlist onClick={(e) => popupToggler(e)} />
          <Snippet.Container visible={popupVisible}>
            {userlists.map(({ name, id }) => {
              return <SnippetItem name={name} id={id} />;
            })}
            {userlists.length !== 5 && <SnippetCreate />}
          </Snippet.Container>
        </Snippet>
        <Snippet>
          <Snippet.Favorite />
        </Snippet>
      </>
    )
  );
}
