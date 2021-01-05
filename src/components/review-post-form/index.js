import React from "react";

import {
  Container,
  Nickname,
  Form,
  Input,
  Textfield,
  Button,
  RadioWrapper,
  RadioElement,
  Wrapper,
  Title,
  RadioLabel,
  RadioInner,
  RadioTitle,
  RadioElementsContainer,
  Icon,
} from "./styles/review-post-form";

export default function ReviewPostForm({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

ReviewPostForm.Nickname = function ReviewPostFormNickname({
  children,
  ...rest
}) {
  return <Nickname {...rest}>{children}</Nickname>;
};

ReviewPostForm.Form = function ReviewPostForm({ children, ...rest }) {
  return <Form {...rest}>{children}</Form>;
};

ReviewPostForm.Input = function ReviewPostFormInput({ children, ...rest }) {
  return <Input {...rest}>{children}</Input>;
};

ReviewPostForm.Textfield = function ReviewPostFormTextfield({
  children,
  ...rest
}) {
  return <Textfield {...rest}>{children}</Textfield>;
};

ReviewPostForm.RadioWrapper = function ReviewPostFormRadioWrapper({
  children,
  ...rest
}) {
  return <RadioWrapper {...rest}>{children}</RadioWrapper>;
};

ReviewPostForm.RadioElement = function ReviewPostFormRadioElement({
  children,
  ...rest
}) {
  return <RadioElement {...rest} />;
};

ReviewPostForm.Button = function ReviewPostFormButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

ReviewPostForm.Wrapper = function ReviewPostFormWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

ReviewPostForm.Title = function ReviewPostFormTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

ReviewPostForm.RadioLabel = function ReviewPostFormRadioLabel({
  children,
  ...rest
}) {
  return <RadioLabel {...rest}>{children}</RadioLabel>;
};

ReviewPostForm.RadioInner = function ReviewPostFormRadioInner({
  children,
  ...rest
}) {
  return <RadioInner {...rest}>{children}</RadioInner>;
};

ReviewPostForm.RadioTitle = function ReviewPostFormRadioTitle({
  children,
  ...rest
}) {
  return <RadioTitle {...rest}>{children}</RadioTitle>;
};

ReviewPostForm.RadioElementsContainer = function ReviewPostFormRadioElementsContainer({
  children,
  ...rest
}) {
  return <RadioElementsContainer {...rest}>{children}</RadioElementsContainer>;
};

ReviewPostForm.Icon = function ReviewPostFormIcon({ children, ...rest }) {
  return <Icon {...rest}>{children}</Icon>;
};
