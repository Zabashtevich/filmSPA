import React from "react";

import { Container, Item, Dummy } from "./styles/pagin";

export default function Pagin({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Pagin.Item = function PaginItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Pagin.Dummy = function PaginDummy({ children, ...rest }) {
  return <Dummy {...rest}>{children}</Dummy>;
};
