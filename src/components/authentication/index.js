import React from "react";

import {
  Container,
  Title,
  Form,
  Row,
  Subtitle,
  Input,
  Button,
  Redirect,
  Link,
} from "./styles/authentication";

export default function Authentication({ chilren, ...rest }) {
  return <Container {...rest}>{chilren}</Container>;
}

Authentication.Title = function AuthenticationTitle({ chilren, ...rest }) {
  return <Title {...rest}>{chilren}</Title>;
};

Authentication.Form = function AuthenticationForm({ chilren, ...rest }) {
  return <Form {...rest}>{chilren}</Form>;
};

Authentication.Row = function AuthenticationRow({ chilren, ...rest }) {
  return <Row {...rest}>{chilren}</Row>;
};

Authentication.Subtitle = function AuthenticationSubtitle({
  chilren,
  ...rest
}) {
  return <Subtitle {...rest}>{chilren}</Subtitle>;
};

Authentication.Input = function AuthenticationInput({ ...rest }) {
  return <Input {...rest} />;
};

Authentication.Button = function AuthenticationButton({ chilren, ...rest }) {
  return <Button {...rest}>{chilren}</Button>;
};

Authentication.Redirect = function AuthenticationRedirect({
  chilren,
  ...rest
}) {
  return <Redirect {...rest}>{chilren}</Redirect>;
};

Authentication.Link = function AuthenticationLink({ chilren, ...rest }) {
  return <Link {...rest}>{chilren}</Link>;
};
