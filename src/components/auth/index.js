import React from "react";

import {
  Container,
  Form,
  Header,
  Title,
  Row,
  Input,
  Key,
  Nickname,
  Mail,
  Wrapper,
  Back,
  Button,
  Subtitle,
  Message,
  Link,
  Avatar,
  File,
} from "./styles/auth";

export default function Auth({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Auth.Header = function AuthHeader({ children, ...rest }) {
  return <Header {...rest}>{children}</Header>;
};

Auth.Form = function AuthForm({ children, ...rest }) {
  return <Form {...rest}>{children}</Form>;
};

Auth.Title = function AuthTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Auth.Row = function AuthRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

Auth.Input = function AuthInput({ inputRef, children, ...rest }) {
  return <Input {...rest} ref={inputRef} />;
};

Auth.Key = function AuthKey({ ...rest }) {
  return <Key {...rest} />;
};

Auth.Nickname = function AuthNickname({ ...rest }) {
  return <Nickname {...rest} />;
};

Auth.Mail = function AuthMail({ ...rest }) {
  return <Mail {...rest} />;
};

Auth.Wrapper = function AuthWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Auth.Back = function AuthBack({ children, ...rest }) {
  return <Back {...rest}>{children}</Back>;
};

Auth.Button = function AuthButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

Auth.Subtitle = function AuthSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Auth.Message = function AuthMessage({ children, ...rest }) {
  return <Message {...rest}>{children}</Message>;
};

Auth.Link = function AuthLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};

//profile image

Auth.Avatar = function AuthAvatar({ previewRef, ...rest }) {
  return <Avatar {...rest} ref={previewRef} />;
};

Auth.File = function AuthFile({ ...rest }) {
  return <File {...rest} />;
};
