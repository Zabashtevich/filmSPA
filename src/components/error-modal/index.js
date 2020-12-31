import React from "react";

import {
  Container,
  Wrapper,
  Button,
  CloseIcon,
  Message,
} from "./styles/error-modal";

export default function ErrorModal({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

ErrorModal.Wrapper = function ErrorModalWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

ErrorModal.Button = function ErrorModalButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

ErrorModal.CloseIcon = function ErrorModalCloseIcon({ children, ...rest }) {
  return <CloseIcon {...rest} />;
};

ErrorModal.Message = function ErrorModalMessage({ children, ...rest }) {
  return <Message {...rest}>{children}</Message>;
};
