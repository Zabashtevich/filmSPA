import React from "react";

import {
  Container,
  Toggler,
  Item,
  Form,
  Row,
  Subtitle,
  Input,
  Button,
  Redirect,
  Link,
} from "./styles/auth";

export default function Auth({ chilren, ...rest }) {
  return <Container {...rest}>{chilren}</Container>;
}

Auth.Toggler = function AuthToggler({ chilren, ...rest }) {
  return <Toggler {...rest}>{chilren}</Toggler>;
};

Auth.Item = function AuthItem({ chilren, ...rest }) {
  return <Item {...rest}>{chilren}</Item>;
};

Auth.Form = function AuthForm({ chilren, ...rest }) {
  return <Form {...rest}>{chilren}</Form>;
};

Auth.Row = function AuthRow({ chilren, ...rest }) {
  return <Row {...rest}>{chilren}</Row>;
};

Auth.Subtitle = function AuthSubtitle({ chilren, ...rest }) {
  return <Subtitle {...rest}>{chilren}</Subtitle>;
};

Auth.Input = function AuthInput({ ...rest }) {
  return <Input {...rest} />;
};

Auth.Button = function AuthButton({ chilren, ...rest }) {
  return <Button {...rest}>{chilren}</Button>;
};

Auth.Redirect = function AuthRedirect({ chilren, ...rest }) {
  return <Redirect {...rest}>{chilren}</Redirect>;
};

Auth.Link = function AuthLink({ chilren, ...rest }) {
  return <Link {...rest}>{chilren}</Link>;
};
