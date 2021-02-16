import React from "react";

import { Container, Wrapper, Message, Spinner } from "./styles/warning";
import notificationSpinner from "../../assets/spinner-small.svg";

export default function Warning({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Warning.Wrapper = function WarningWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Warning.Message = function WarningMessage({ children, ...rest }) {
  return <Message {...rest}>{children}</Message>;
};

Warning.Spinner = function WarningSpinner({ ...rest }) {
  return <Spinner src={notificationSpinner} {...rest} />;
};
