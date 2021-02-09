import React from "react";

export default function UtilityModal({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
