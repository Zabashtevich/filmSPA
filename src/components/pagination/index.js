import React from "react";

import { Container, List, Item } from "./styles/pagination";

export default function Pagination({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Pagination.List = function PaginationList({ children, ...rest }) {
  return <List>{children}</List>;
};

Pagination.Item = function PaginationItem({ children, ...rest }) {
  return <Item />;
};
