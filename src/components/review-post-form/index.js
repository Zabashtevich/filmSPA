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
  ProfileWrapper,
  Title,
  RadioLabel,
  RadioInner,
  RadioTitle,
  RadioElementsContainer,
  Icon,
  ButtonsWrapper,
  BackLink,
  Avatar,
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

ReviewPostForm.Input = function ReviewPostFormInput({
  children,
  inputRef,
  ...rest
}) {
  return (
    <Input ref={inputRef} {...rest} autoComplete="off">
      {children}
    </Input>
  );
};

ReviewPostForm.Textfield = function ReviewPostFormTextfield({
  textfieldRef,
  ...rest
}) {
  return <Textfield ref={textfieldRef} {...rest} />;
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

ReviewPostForm.BackLink = function ReviewPostFormBackLink({
  children,
  ...rest
}) {
  return <BackLink {...rest}>{children}</BackLink>;
};

ReviewPostForm.ProfileWrapper = function ReviewPostFormProfileWrapper({
  children,
  ...rest
}) {
  return <ProfileWrapper {...rest}>{children}</ProfileWrapper>;
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
  radioRef,
  ...rest
}) {
  return (
    <RadioTitle ref={radioRef} {...rest}>
      {children}
    </RadioTitle>
  );
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

ReviewPostForm.ButtonsWrapper = function ReviewPostFormButtonsWrapper({
  children,
  ...rest
}) {
  return <ButtonsWrapper {...rest}>{children}</ButtonsWrapper>;
};

ReviewPostForm.Avatar = function ReviewPostFormAvatar({ children, ...rest }) {
  return <Avatar {...rest}>{children}</Avatar>;
};
