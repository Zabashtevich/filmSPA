import React from "react";
import { CSSTransition } from "react-transition-group";

import { Container, Message, Spinner } from "./styles/process-window";
import warningSpinner from "../../assets/spinner-small.svg";

export default function ProcessWindow({ visible, children, ...rest }) {
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

ProcessWindow.Message = function ProcessWindowMessage({ children, ...rest }) {
  return <Message {...rest}>{children}</Message>;
};

ProcessWindow.Spinner = function ProcessWindowSpinner({ ...rest }) {
  return <Spinner src={warningSpinner} {...rest} />;
};
