import React from "react";

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
} from "./styles/authentication-form";

export default function AuthenticationForm({ children }) {
  return <Container>{children}</Container>;
}

AuthenticationForm.Form = function AuthenticationFormForm({ children }) {
  return <Form noValidate>{children}</Form>;
};

AuthenticationForm.Title = function AuthenticationFormTitle({ children }) {
  return <Title>{children}</Title>;
};

AuthenticationForm.Wrapper = function AuthenticationFormWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
};

AuthenticationForm.Input = function AuthenticationFormInput({ ...rest }) {
  return <Input {...rest} autoComplete="off" />;
};

AuthenticationForm.Label = function AuthenticationFormLabel({
  children,
  ...rest
}) {
  return <Label {...rest}>{children}</Label>;
};

AuthenticationForm.Button = function AuthenticationFormButton({ children }) {
  return <Button>{children}</Button>;
};

AuthenticationForm.ErrorContainer = function AuthenticationFormErrorContainer({
  children,
}) {
  return <ErrorContainer>{children}</ErrorContainer>;
};

AuthenticationForm.ErrorMessage = function AuthenticationFormErrorMessage({
  children,
}) {
  return <ErrorMessage>{children}</ErrorMessage>;
};
