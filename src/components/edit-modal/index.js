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
  Warning,
} from "./styles/edit-modal";

export default function EditModal({ children, ...rest }) {
  return <Background {...rest}>{children}</Background>;
}

EditModal.Container = function EditModalContainer({
  children,
  visible,
  ...rest
}) {
  return (
    <CSSTransition
      in={visible}
      appear={true}
      classNames="fade"
      timeout={{ enter: 500, exit: 600, appear: 500 }}
      unmountOnExit
      mountOnEnter
    >
      <Container {...rest}>{children}</Container>
    </CSSTransition>
  );
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

EditModal.Confirm = function EditModalConfirm({ ...rest }) {
  return <Confirm {...rest}>CONFIRM</Confirm>;
};

EditModal.Cancel = function EditModalCancel({ ...rest }) {
  return <Cancel {...rest}>CANCEL</Cancel>;
};

EditModal.Warning = function EditModalWarning({ children, ...rest }) {
  return <Warning {...rest}>{children}</Warning>;
};
