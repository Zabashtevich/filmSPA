import React from "react";

import { Container, Title, Item } from "./styles/tabs";

export default function Tabs({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Tabs.Title = function TabsTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Tabs.Item = function TabsItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};
