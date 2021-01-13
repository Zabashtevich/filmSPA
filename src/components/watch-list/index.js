import React from "react";

import { Container } from "./styles/watch-list";

export default function WatchList({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
