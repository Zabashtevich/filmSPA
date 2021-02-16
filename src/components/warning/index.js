import React from "react";
import { CSSTransition } from "react-transition-group";

import { Container, Message, Spinner } from "./styles/warning";
import warningSpinner from "../../assets/spinner-small.svg";

export default function Warning({ visible, children, ...rest }) {
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

Warning.Message = function WarningMessage({ children, ...rest }) {
  return <Message {...rest}>{children}</Message>;
};

Warning.Spinner = function WarningSpinner({ ...rest }) {
  return <Spinner src={warningSpinner} {...rest} />;
};
