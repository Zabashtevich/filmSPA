import React from "react";

import {
  Backdrop,
  Close,
  Container,
  Header,
  Title,
  Error,
  Confirm,
  Header,
  Message,
  Wrapper,
  Decline,
  Confirm,
} from "./styles/modal";

export default function Modal({ children, ...rest }) {
  return <Backdrop {...rest}>{children}</Backdrop>;
}

Modal.Close = function ModalClose({ ...rest }) {
  return <Close {...rest} />;
};

Modal.Container = function ModalContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Modal.Header = function ModalHeader({ children, ...rest }) {
  return <Header {...rest}>{children}</Header>;
};

Modal.Title = function ModalTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Modal.Error = function ModalError({ children, ...rest }) {
  return <Error {...rest} />;
};

Modal.Confirm = function ModalConfirm({ children, ...rest }) {
  return <Confirm {...rest} />;
};

Modal.Header = function ModalHeader({ children, ...rest }) {
  return <Header {...rest}>{children}</Header>;
};

Modal.Message = function ModalMessage({ children, ...rest }) {
  return <Message {...rest}>{children}</Message>;
};

Modal.Wrapper = function ModalWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Modal.Decline = function ModalDecline({ children, ...rest }) {
  return <Decline {...rest}>{children}</Decline>;
};

Modal.Confirm = function ModalConfirm({ children, ...rest }) {
  return <Confirm {...rest}>{children}</Confirm>;
};
