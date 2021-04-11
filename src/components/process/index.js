import React from "react";
import { CSSTransition } from "react-transition-group";
import processSpinner from "../../assets/process-spinner.svg";

import { Container, Message, Spinner } from "./styles/process";

export default function Process({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      appear={true}
      mountOnEnter
      unmountOnExit
      timeout={500}
      classNames="slide"
    >
      <Container {...rest}>{children}</Container>
    </CSSTransition>
  );
}

Process.Message = function ProcessMessage({ children, ...rest }) {
  return <Message {...rest}>{children}</Message>;
};

Process.Spinner = function ProcessSpinner({ ...rest }) {
  return <Spinner {...rest} src={processSpinner} />;
};
