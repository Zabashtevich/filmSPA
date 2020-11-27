import React from "react";

import {
  Container,
  Selector,
  Anchor,
  Category,
  Title,
  TitleInner,
  Wrapper,
} from "./styles/tab";

export default function Tab({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Tab.Selector = function TabSelector({ children, ...rest }) {
  return <Selector {...rest}>{children}</Selector>;
};

Tab.Anchor = function TabAnchor({ children, ...rest }) {
  return (
    <Anchor {...rest}>
      <Category>{children}</Category>
    </Anchor>
  );
};
Tab.Title = function TabTitle({ children, ...rest }) {
  return (
    <TitleInner {...rest}>
      <Title> {children}</Title>
    </TitleInner>
  );
};

Tab.Wrapper = function TabWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};
