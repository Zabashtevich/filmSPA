import React from "react";
import { CSSTransition } from "react-transition-group";

import { Container, Message, Spinner } from "./styles/processing-window";
import warningSpinner from "../../assets/spinner-small.svg";

export default function ProcessingWindow({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="fade"
      appear={true}
      timeout={500}
      mountOnEnter
      unmountOnExit
    >
      <Container {...rest}>{children}</Container>
    </CSSTransition>
  );
}

ProcessingWindow.Message = function ProcessingWindowMessage({
  children,
  ...rest
}) {
  return <Message {...rest}>{children}</Message>;
};

ProcessingWindow.Spinner = function ProcessingWindowSpinner({ ...rest }) {
  return <Spinner src={warningSpinner} {...rest} />;
};
