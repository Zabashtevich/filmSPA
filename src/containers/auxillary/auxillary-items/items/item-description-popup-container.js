import React from "react";
import { CSSTransition } from "react-transition-group";

import { ItemDescriptionPopup } from "../../../../components";

export default function ItemDescriptionPopupContainer({
  text,
  visible,
  ...rest
}) {
  console.log(text);
  return (
    <CSSTransition
      in={visible}
      timeout={{ enter: 600, exit: 600 }}
      unmountOnExit
      classNames="fade"
    >
      <ItemDescriptionPopup {...rest}>
        <ItemDescriptionPopup.Message>{text}</ItemDescriptionPopup.Message>
      </ItemDescriptionPopup>
    </CSSTransition>
  );
}
