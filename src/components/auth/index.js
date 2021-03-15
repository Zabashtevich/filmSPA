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
} from "./styles/auth";

export default function Auth({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Auth.Title = function AuthTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Auth.Form = function AuthForm({ children, ...rest }) {
  return <Form {...rest}>{children}</Form>;
};

Auth.Row = function AuthRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

Auth.Subtitle = function AuthSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Auth.Input = function AuthInput({ ...rest }) {
  return <Input {...rest} />;
};

Auth.Button = function AuthButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

Auth.Redirect = function AuthRedirect({ children, ...rest }) {
  return <Redirect {...rest}>{children}</Redirect>;
};

Auth.Link = function AuthLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};
