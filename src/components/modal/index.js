import React from "react";

import {
  Container,
  Overlay,
  Close,
  Window,
  Header,
  Title,
  Icon,
  Body,
  List,
  Message,
  Item,
  Wrapper,
  Cancel,
  Confirm,
} from "./styles/modal";

export default function Modal({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Modal.Overlay = function ModalOverlay({ children, ...rest }) {
  return <Overlay {...rest}>{children}</Overlay>;
};

Modal.Close = function ModalClose({ ...rest }) {
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

Modal.Icon = function ModalIcon({ ...rest }) {
  return <Icon {...rest} />;
};

Modal.Body = function ModalBody({ children, ...rest }) {
  return <Body {...rest}>{children}</Body>;
};

Modal.List = function ModalList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Modal.Item = function ModalItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Modal.Message = function ModalMessage({ children, ...rest }) {
  return <Message {...rest}>{children}</Message>;
};

Modal.Wrapper = function ModalWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Modal.Cancel = function ModalCancel({ children, ...rest }) {
  return <Cancel {...rest}>{children}</Cancel>;
};

Modal.Confirm = function ModalConfirm({ children, ...rest }) {
  return <Confirm {...rest}>{children}</Confirm>;
};
