import React from "react";

import {
  Container,
  Content,
  Wrapper,
  Title,
  Message,
  Button,
} from "./styles/modal";

export default function Modal({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Modal.Content = function ModalContent({ children, ...rest }) {
  return <Content {...rest}>{children}</Content>;
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

Modal.Button = function ModalButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};
