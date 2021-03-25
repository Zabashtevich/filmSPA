import React from "react";
import { CSSTransition } from "react-transition-group";

import { Container, Wrapper, Item, Dummy } from "./styles/pagin";

export default function Pagin({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Pagin.Wrapper = function PaginWrapper({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="fade"
      appear={true}
      mountOnEnter
      unmountOnExit
      timeout={{ enter: 500, exit: 0, appear: 500 }}
    >
      <Wrapper {...rest}>{children}</Wrapper>
    </CSSTransition>
  );
};

Pagin.Item = function PaginItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Pagin.Dummy = function PaginDummy({ children, ...rest }) {
  return <Dummy {...rest}>{children}</Dummy>;
};
