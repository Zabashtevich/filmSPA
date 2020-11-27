import React from "react";

import {
  Container,
  List,
  Item,
  PaginationLink,
  ItemEtc,
} from "./styles/pagination";

export default function Pagination({ children }) {
  return <Container>{children}</Container>;
}

Pagination.List = function PaginationList({ children }) {
  return <List>{children}</List>;
};

Pagination.Item = function PaginationItem({ children, to, ...rest }) {
  return (
    <Item {...rest}>
      <PaginationLink to={to}>{children}</PaginationLink>
    </Item>
  );
};

Pagination.Max = function PaginationMax({ children, to, ...rest }) {
  return (
    <Item {...rest}>
      <PaginationLink to={to}>{children}</PaginationLink>
    </Item>
  );
};

Pagination.Etc = function PaginationEtc({ children }) {
  return (
    <Item>
      <ItemEtc>{children}</ItemEtc>
    </Item>
  );
};
