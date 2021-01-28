import React from "react";

import {
  Container,
  Wrapper,
  Inner,
  CardContainer,
} from "./styles/account-panel";

export default function AccountPanel({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

AccountPanel.Wrapper = function AccountPanelWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

AccountPanel.Inner = function AccountPanelInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

AccountPanel.CardContainer = function AccountPanelCardContainer({
  children,
  ...rest
}) {
  return <CardContainer {...rest}>{children}</CardContainer>;
};
