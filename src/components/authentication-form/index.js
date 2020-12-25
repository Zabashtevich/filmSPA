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
} from "./styles/authentication-form";

export default function AuthenticationForm({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

AuthenticationForm.Form = function AuthenticationFormForm({
  children,
  ...rest
}) {
  return (
    <Form noValidate {...rest}>
      {children}
    </Form>
  );
};

AuthenticationForm.Title = function AuthenticationFormTitle({
  children,
  ...rest
}) {
  return <Title {...rest}>{children}</Title>;
};

AuthenticationForm.Wrapper = function AuthenticationFormWrapper({
  children,
  ...rest
}) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

AuthenticationForm.Input = forwardRef((props, ref) => {
  return <Input {...props} autoComplete="off" ref={ref} />;
});

AuthenticationForm.Label = function AuthenticationFormLabel({
  children,
  ...rest
}) {
  return <Label {...rest}>{children}</Label>;
};

AuthenticationForm.Button = function AuthenticationFormButton({
  children,
  ...rest
}) {
  return <Button {...rest}>{children}</Button>;
};

AuthenticationForm.ErrorContainer = function AuthenticationFormErrorContainer({
  children,
  ...rest
}) {
  return <ErrorContainer {...rest}>{children}</ErrorContainer>;
};

AuthenticationForm.ErrorMessage = function AuthenticationFormErrorMessage({
  children,
  ...rest
}) {
  return <ErrorMessage {...rest}>{children}</ErrorMessage>;
};

AuthenticationForm.TextLink = function AuthenticationFormTextLink({
  children,
  ...rest
}) {
  return <TextLink {...rest}>{children}</TextLink>;
};
