import React from "react";

export default function Actor({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
