import React from "react";

import { Container, Wrapper, Overview, Title } from "./styles/details-panel";

export default function DetailsPanel({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

DetailsPanel.ContentWrapper = function DetailsPanelContentWrapper({
  children,
  ...rest
}) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

DetailsPanel.Overview = function DetailsPanelOverview({ children, ...rest }) {
  return <Overview {...rest}>{children}</Overview>;
};

DetailsPanel.Title = function DetailsPanelTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};
