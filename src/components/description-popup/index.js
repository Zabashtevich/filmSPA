import React from "react";

import { Container, Message } from "./styles/item-description-popup";

export default function ItemDescriptionPopup({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

ItemDescriptionPopup.Message = function ItemDescriptionPopupMessage({
  children,
  ...rest
}) {
  return <Message {...rest}>{children}</Message>;
};
