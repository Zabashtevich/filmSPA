import React from "react";

import { Container, Message, Return } from "./styles/nomatch";

export default function Nomatch({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Nomatch.Message = function NomatchMessage({ children, ...rest }) {
  return <Message {...rest}>{children}</Message>;
};

Nomatch.Return = function NomatchReturn({ children, ...rest }) {
  return <Return {...rest}>{children}</Return>;
};
