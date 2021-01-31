import React from "react";

import { Container } from "./styles/filter";

export default function Filter({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
