import React from "react";

import { Container, Section } from "./styles/main";

export default function Main({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Main.Section = function MainSection({ children, ...rest }) {
  return <Section {...rest}>{children}</Section>;
};
