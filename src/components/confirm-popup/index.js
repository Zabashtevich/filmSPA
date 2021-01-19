import React from "react";

import {
  Background,
  Wrapper,
  Message,
  ButtonsWrapper,
  Container,
  ContainerBackground,
  Button,
  Title,
} from "./styles/confirm-popup";

export default function ConfirmPopup({ children, ...rest }) {
  return <Background {...rest}>{children}</Background>;
}

ConfirmPopup.Container = function ConfirmPopupContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

ConfirmPopup.ContainerBackground = function ConfirmPopupContainerBackground({
  ...rest
}) {
  return <ContainerBackground {...rest} />;
};

ConfirmPopup.Wrapper = function ConfirmPopupWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

ConfirmPopup.Title = function ConfirmPopupTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

ConfirmPopup.Message = function ConfirmPopupMessage({ children, ...rest }) {
  return <Message {...rest}>{children}</Message>;
};

ConfirmPopup.ButtonsWrapper = function ConfirmPopupButtonsWrapper({
  children,
  ...rest
}) {
  return <ButtonsWrapper {...rest}>{children}</ButtonsWrapper>;
};

ConfirmPopup.Button = function ConfirmPopupButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};
