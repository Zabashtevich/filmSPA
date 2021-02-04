import React from "react";

import { Container, CardsContainer } from "./styles/account-panel";

export default function AccountPanel({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

AccountPanel.CardsContainer = function AccountPanelCardsContainer({
  children,
  ...rest
}) {
  return <CardsContainer {...rest}>{children}</CardsContainer>;
};
