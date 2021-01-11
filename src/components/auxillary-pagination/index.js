import React from "react";

import { Container, Item, DummyItem } from "./styles/auxillary-pagination";

export default function AuxillaryPagination({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

AuxillaryPagination.Item = function AuxillaryPaginationItem({
  children,
  ...rest
}) {
  return <Item {...rest}>{children}</Item>;
};

AuxillaryPagination.DummyItem = function AuxillaryPaginationDummyItem({
  children,
  ...rest
}) {
  return <DummyItem {...rest}>{children}</DummyItem>;
};
