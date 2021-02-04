import React from "react";
import { CSSTransition } from "react-transition-group";

import { Container, Wrapper, Button } from "./styles/load-more";

export default function LoadMore({ children, visible, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      appear={true}
      timeout={{ enter: 500, exit: 600, appear: 500 }}
      classNames="fade"
      unmountOnExit
      mountOnEnter
    >
      <Container {...rest}>{children}</Container>
    </CSSTransition>
  );
}

LoadMore.Wrapper = function LoadMoreWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

LoadMore.Button = function LoadMoreButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};
