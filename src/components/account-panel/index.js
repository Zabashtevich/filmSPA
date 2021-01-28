import React from "react";

import { Container, Wrapper } from "./styles/account-panel";

export default function AccountPanel({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

AccountPanel.Wrapper = function AccountPanelWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};
