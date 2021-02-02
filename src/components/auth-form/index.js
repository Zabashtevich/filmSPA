import React, { forwardRef } from "react";

import {
  Title,
  Container,
  Wrapper,
  Input,
  Label,
  Button,
  ErrorContainer,
  ErrorMessage,
  Form,
  TextLink,
  AvatarPlaceholder,
  UserAvatar,
} from "./styles/auth-form";

export default function AuthForm({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

AuthForm.Form = function AuthFormForm({ children, ...rest }) {
  return (
    <Form noValidate {...rest}>
      {children}
    </Form>
  );
};

AuthForm.Title = function AuthFormTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

AuthForm.Wrapper = function AuthFormWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

AuthForm.Input = forwardRef((props, ref) => {
  return <Input {...props} autoComplete="off" ref={ref} />;
});

AuthForm.Label = function AuthFormLabel({ children, ...rest }) {
  return <Label {...rest}>{children}</Label>;
};

AuthForm.Button = function AuthFormButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

AuthForm.ErrorContainer = function AuthFormErrorContainer({
  children,
  ...rest
}) {
  return <ErrorContainer {...rest}>{children}</ErrorContainer>;
};

AuthForm.ErrorMessage = function AuthFormErrorMessage({ children, ...rest }) {
  return <ErrorMessage {...rest}>{children}</ErrorMessage>;
};

AuthForm.TextLink = function AuthFormTextLink({ children, ...rest }) {
  return <TextLink {...rest}>{children}</TextLink>;
};

AuthForm.AvatarPlaceholder = function AuthFormAvatarPlaceholder({
  children,
  ...rest
}) {
  return <AvatarPlaceholder {...rest} />;
};

AuthForm.UserAvatar = function AuthFormUserAvatar({ children, ...rest }) {
  return <UserAvatar {...rest} />;
};
