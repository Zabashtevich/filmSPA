import React from "react";

import { Container, Wrapper } from "./styles/account-cards-panel";

export default function AccountCardPanel({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

AccountCardPanel.Wrapper = function AccountCardPanelWrapper({
  children,
  ...rest
}) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};
