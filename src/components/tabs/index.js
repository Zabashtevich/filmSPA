import React from "react";

import { Container, Anchor, Title } from "./styles/tabs";

export default function Tabs({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Tabs.Anchor = function TabsAnchor({ children, ...rest }) {
  return <Anchor {...rest}>{children}</Anchor>;
};

Tabs.Title = function TabsTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};
