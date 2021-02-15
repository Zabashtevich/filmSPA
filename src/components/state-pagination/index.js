import React from "react";

import { Container, Item } from "./styles/state-pagination";

export default function StatePagination({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

StatePagination.Item = function StatePaginationitem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};
