import React from "react";
import { CSSTransition } from "react-transition-group";

import { AcclistCreateItem } from "../../../../components";

export default function AccountListPlaceholder({
  visible,
  setPlaceholderDeelay,
}) {
  return (
    <CSSTransition
      in={visible}
      appear={true}
      timeout={{ enter: 500, exit: 600, appear: 300 }}
      onEnter={() => setPlaceholderDeelay(true)}
      onExited={() => setPlaceholderDeelay(false)}
      classNames="fade"
      unmountOnExit
      mountOnEnter
    >
      <AcclistCreateItem>
        <AcclistCreateItem.Placeholder>
          You do not have <br />
          any lists
        </AcclistCreateItem.Placeholder>
      </AcclistCreateItem>
    </CSSTransition>
  );
}
