import React, { useState } from "react";

import { Snippet } from "../../../../components";
import SnippetPopup from "./item";

export default function SnipperContainer() {
  const [popupVisible, setPopupVisible] = useState(false);

  return (
    <Snippet>
      <Snippet.Element onClick={() => setPopupVisible(true)}>
        <Snippet.Userlist />
        <SnippetPopup visible={popupVisible} />
      </Snippet.Element>
      <Snippet.Element>
        <Snippet.Favorite />
      </Snippet.Element>
    </Snippet>
  );
}
