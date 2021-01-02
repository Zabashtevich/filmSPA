import React from "react";

import {
  Container,
  Wrapper,
  CornerButton,
  CloseIcon,
  Message,
  CloseButton,
  MessageContainer,
  Title,
  TitleContainer,
  Inner,
} from "./styles/error-modal";

export default function ErrorModal({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

ErrorModal.Wrapper = function ErrorModalWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

ErrorModal.CloseButton = function ErrorModalCloseButton({ children, ...rest }) {
  return <CloseButton {...rest}>{children}</CloseButton>;
};

ErrorModal.CornerButton = function ErrorModalCornerButton({
  children,
  ...rest
}) {
  return <CornerButton {...rest}>{children}</CornerButton>;
};

ErrorModal.CloseIcon = function ErrorModalCloseIcon({ children, ...rest }) {
  return <CloseIcon {...rest} />;
};

ErrorModal.Message = function ErrorModalMessage({ children, ...rest }) {
  return <Message {...rest}>{children}</Message>;
};

ErrorModal.MessageContainer = function ErrorModalMessageContainer({
  children,
  ...rest
}) {
  return <MessageContainer {...rest}>{children}</MessageContainer>;
};

ErrorModal.Title = function ErrorModalTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

ErrorModal.TitleContainer = function ErrorModalTitleContainer({
  children,
  ...rest
}) {
  return <TitleContainer {...rest}>{children}</TitleContainer>;
};

ErrorModal.Inner = function ErrorModalInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};