import React from "react";

import { Container, Wrapper, Message, Spinner } from "./styles/notification";
import notificationSpinner from "../../assets/spinner-small.svg";

export default function Notification({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Notification.Wrapper = function NotificationWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Notification.Message = function NotificationMessage({ children, ...rest }) {
  return <Message {...rest}>{children}</Message>;
};

Notification.Spinner = function NotificationSpinner({ children, ...rest }) {
  return (
    <Spinner src={notificationSpinner} {...rest}>
      {children}
    </Spinner>
  );
};
