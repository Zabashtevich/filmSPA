import React from "react";

import { Container, Selector, Anchor, Category } from "./styles/tab";

export default function Tab({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Tab.Selector = function TabSelector({ children, ...rest }) {
  return <Selector {...rest}>{children}</Selector>;
};

Tab.Anchor = function TabAnchor({ active, children, ...rest }) {
  return (
    <Anchor active {...rest}>
      <Category>{children}</Category>
    </Anchor>
  );
};
