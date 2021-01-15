import React from "react";

import { Container } from "./styles/tooltips";

export default function Tooltips({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
