import React from "react";
import { CSSTransition } from "react-transition-group";

import {
  Container,
  Content,
  Wrapper,
  Header,
  Title,
  Message,
  Inner,
  Button,
  Close,
} from "./styles/modal";

export default function Modal({ visible, children, ...rest }) {
  return (
    <CSSTransition
      classNames="fade"
      in={visible}
      timeout={{ enter: 500, exit: 0, appear: 500 }}
      mountOnEnter
      unmountOnExit
    >
      <Container {...rest}>{children}</Container>
    </CSSTransition>
  );
}

Modal.Content = function ModalContent({ children, ...rest }) {
  return <Content {...rest}>{children}</Content>;
};

Modal.Header = function ModalHeader({ children, ...rest }) {
  return <Header {...rest}>{children}</Header>;
};

Modal.Wrapper = function ModalWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Modal.Title = function ModalTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Modal.Message = function ModalMessage({ children, ...rest }) {
  return <Message {...rest}>{children}</Message>;
};

Modal.Inner = function ModalInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

Modal.Button = function ModalButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

Modal.Close = function ModalClose({ ...rest }) {
  return <Close {...rest} />;
};
