import React from "react";

import { Container, Wrapper, Overview } from "./styles/details-panel";

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
