import React from "react";

import {
  Container,
  Title,
  Row,
  Subtitle,
  Inner,
  Input,
  Key,
  Name,
  Mail,
  Back,
  Button,
  Message,
  Link,
} from "./styles/auth";

export default function Auth({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Auth.Title = function AuthTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Auth.Row = function AuthRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

Auth.Subtitle = function AuthSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Auth.Inner = function AuthInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

Auth.Input = function AuthInput({ children, ...rest }) {
  return <Input {...rest} />;
};

Auth.Key = function AuthKey({ ...rest }) {
  return <Key {...rest} />;
};

Auth.Name = function AuthName({ ...rest }) {
  return <Name {...rest} />;
};

Auth.Mail = function AuthMail({ ...rest }) {
  return <Mail {...rest} />;
};

Auth.Back = function AuthBack({ children, ...rest }) {
  return <Back {...rest}>{children}</Back>;
};

Auth.Button = function AuthButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

Auth.Message = function AuthMessage({ children, ...rest }) {
  return <Message {...rest}>{children}</Message>;
};

Auth.Link = function AuthLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};
