import React from "react";

import { Snippet } from "../../../../components";
import SnippetPopup from "./item";

export default function SnipperContainer() {
  return (
    <Snippet>
      <Snippet.Element>
        <Snippet.Userlist />
        <SnippetPopup />
      </Snippet.Element>
      <Snippet.Element>
        <Snippet.Favorite />
      </Snippet.Element>
    </Snippet>
  );
}
