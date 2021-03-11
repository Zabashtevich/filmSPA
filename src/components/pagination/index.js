import React from "react";

import { Container, Item, Dummy, Left, Right } from "./styles/pagination";

export default function Pagination({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Pagination.Item = function PaginationItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Pagination.Dummy = function PaginationDummy({ children, ...rest }) {
  return <Dummy {...rest}>{children}</Dummy>;
};

Pagination.Left = function PaginationLeft({ children, ...rest }) {
  return <Left {...rest}>{children}</Left>;
};

Pagination.Right = function PaginationRight({ children, ...rest }) {
  return <Right {...rest}>{children}</Right>;
};
