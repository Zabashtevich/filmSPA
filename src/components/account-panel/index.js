import React from "react";

import { Container, CardsContainer, Placeholder } from "./styles/account-panel";

export default function AccountPanel({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

AccountPanel.CardsContainer = function AccountPanelCardsContainer({
  children,
  ...rest
}) {
  return <CardsContainer {...rest}>{children}</CardsContainer>;
};

AccountPanel.Placeholder = function AccountPanelPlaceholder({
  children,
  ...rest
}) {
  return <Placeholder {...rest}>{children}</Placeholder>;
};
