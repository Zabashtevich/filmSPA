import React from "react";

import { Container, Message } from "./styles/item-description-popup";

export default function DescriptionPopup({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

DescriptionPopup.Message = function DescriptionPopupMessage({
  children,
  ...rest
}) {
  return <Message {...rest}>{children}</Message>;
};
