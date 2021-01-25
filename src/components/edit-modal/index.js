import React from "react";

import {
  Background,
  Container,
  Title,
  Wrapper,
  Input,
  Confirm,
  Cancel,
} from "./styles/edit-modal";

export default function EditModal({ children, ...rest }) {
  return <Background {...rest}>{children}</Background>;
}

EditModal.Container = function EditModalContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

EditModal.Title = function EditModalTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

EditModal.Wrapper = function EditModalWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

EditModal.Input = function EditModalInput({ ...rest }) {
  return <Input {...rest} />;
};

EditModal.Confirm = function EditModalConfirm({ children, ...rest }) {
  return <Confirm {...rest}>{children}</Confirm>;
};

EditModal.Cancel = function EditModalCancel({ children, ...rest }) {
  return <Cancel {...rest}>{children}</Cancel>;
};
