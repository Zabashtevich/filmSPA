import React from "react";

import {
  Container,
  Backdrop,
  Close,
  Window,
  Header,
  Title,
  Error,
  Warning,
  Message,
  Wrapper,
  Confirm,
  Decline,
} from "./styles/modal";

export default function Modal({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Modal.Backdrop = function ModalBackdrop({ ...rest }) {
  return <Backdrop {...rest} />;
};

Modal.Close = function ModalClose({ children, ...rest }) {
  return <Close {...rest} />;
};

Modal.Window = function ModalWindow({ children, ...rest }) {
  return <Window {...rest}>{children}</Window>;
};

Modal.Header = function ModalHeader({ children, ...rest }) {
  return <Header {...rest}>{children}</Header>;
};

Modal.Title = function ModalTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Modal.Error = function ModalError({ ...rest }) {
  return <Error {...rest} />;
};

Modal.Warning = function ModalWarning({ children, ...rest }) {
  return <Warning {...rest} />;
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
