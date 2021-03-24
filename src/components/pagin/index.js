import React from "react";

import { Container, Wrapper, Item, Dummy } from "./styles/pagin";

export default function Pagin({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Pagin.Wrapper = function PaginWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Pagin.Item = function PaginItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Pagin.Dummy = function PaginDummy({ children, ...rest }) {
  return <Dummy {...rest}>{children}</Dummy>;
};
