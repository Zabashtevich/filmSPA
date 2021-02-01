import React from "react";
import { CSSTransition } from "react-transition-group";

import { DescriptionPopup } from "../../../components";

export default function DescriptionPopupContainer({ text, visible, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      timeout={{ enter: 600, exit: 600 }}
      unmountOnExit
      classNames="fade"
    >
      <DescriptionPopup {...rest}>
        <DescriptionPopup.Message>{text}</DescriptionPopup.Message>
      </DescriptionPopup>
    </CSSTransition>
  );
}
