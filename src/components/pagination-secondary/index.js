import React from "react";

import { Container, Item, DummyItem } from "./styles/pagination-secondary";

export default function PaginationSecondary({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

PaginationSecondary.Item = function PaginationSecondaryItem({
  children,
  ...rest
}) {
  return <Item {...rest}>{children}</Item>;
};

PaginationSecondary.DummyItem = function PaginationSecondaryDummyItem({
  children,
  ...rest
}) {
  return <DummyItem {...rest}>{children}</DummyItem>;
};
