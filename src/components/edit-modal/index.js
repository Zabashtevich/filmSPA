import React from "react";
import { CSSTransition } from "react-transition-group";

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
  return (
    <CSSTransition>
      <Container {...rest}>{children}</Container>
    </CSSTransition>
  );
};

EditModal.Title = function EditModalTitle({ children, ...rest }) {
  return <Title {...rest}>Enter a new name</Title>;
};

EditModal.Wrapper = function EditModalWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

EditModal.Input = function EditModalInput({ ...rest }) {
  return <Input {...rest} />;
};

EditModal.Confirm = function EditModalConfirm({ ...rest }) {
  return <Confirm {...rest}>CONFIRM</Confirm>;
};

EditModal.Cancel = function EditModalCancel({ ...rest }) {
  return <Cancel {...rest}>CANCEL</Cancel>;
};
