import React from "react";
import { CSSTransition } from "react-transition-group";

import {
  Background,
  Container,
  ErrorIcon,
  WarningIcon,
  Title,
  Message,
  Wrapper,
  AcceptButton,
  DeclineButton,
} from "./styles/utility-modal";

export default function UtilityModal({ children, ...rest }) {
  return <Background {...rest}>{children}</Background>;
}

UtilityModal.Container = function UtilityModalContainer({
  visible,
  children,
  ...rest
}) {
  return (
    <CSSTransition
      classNames="fade"
      appear={true}
      in={visible}
      timeout={{ enter: 500, exit: 600, appear: 500 }}
    >
      <Container {...rest}>{children}</Container>
    </CSSTransition>
  );
};

UtilityModal.ErrorIcon = function UtilityModalErrorIcon({ children, ...rest }) {
  return <ErrorIcon {...rest}>{children}</ErrorIcon>;
};

UtilityModal.WarningIcon = function UtilityModalWarningIcon({
  children,
  ...rest
}) {
  return <WarningIcon {...rest}>{children}</WarningIcon>;
};

UtilityModal.Title = function UtilityModalTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

UtilityModal.Message = function UtilityModalMessage({ children, ...rest }) {
  return <Message {...rest}>{children}</Message>;
};

UtilityModal.Wrapper = function UtilityModalWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

UtilityModal.AcceptButton = function UtilityModalAcceptButton({
  children,
  ...rest
}) {
  return <AcceptButton {...rest}>{children}</AcceptButton>;
};

UtilityModal.DeclineButton = function UtilityModalDeclineButton({
  children,
  ...rest
}) {
  return <DeclineButton {...rest}>{children}</DeclineButton>;
};
