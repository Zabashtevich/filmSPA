import React from "react";

import { Container } from "./styles/textfield-form";

export default function TextfieldForm({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
