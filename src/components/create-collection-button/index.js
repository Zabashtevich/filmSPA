import React from "react";

import { Container } from "./styles/create-collection-button";

export default function CreateCollectionButton({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}
