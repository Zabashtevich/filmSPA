import React from "react";

import { Container, Title, Item } from "./styles/tabs";

export default function Tabs({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Tabs.Title = function Title({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Tabs.Item = function Item({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};
