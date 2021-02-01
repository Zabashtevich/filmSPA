import React from "react";
import { CSSTransition } from "react-transition-group";

import { AcclistCreateItem } from "../../../../components";

export default function AccountListPlaceholder({
  visible,
  setPlaceholderDeelay,
}) {
  return (
    <AcclistCreateItem.PlaceholderContainer
      visible={visible}
      setPlaceholderDeelay={setPlaceholderDeelay}
    >
      <AcclistCreateItem.Placeholder>
        You do not have <br />
        any lists
      </AcclistCreateItem.Placeholder>
    </AcclistCreateItem.PlaceholderContainer>
  );
}
