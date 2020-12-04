import React from "react";

import { Container, Wrapper, Overview, Title } from "./styles/details-panel";

export default function DetailsPanel({ children }) {
  return <Container>{children}</Container>;
}

DetailsPanel.ContentWrapper = function DetailsPanelContentWrapper({
  children,
}) {
  return <Wrapper>{children}</Wrapper>;
};

DetailsPanel.Overview = function DetailsPanelOverview({ children }) {
  return <Overview>{children}</Overview>;
};

DetailsPanel.Title = function DetailsPanelTitle({ children }) {
  return <Title>{children}</Title>;
};
