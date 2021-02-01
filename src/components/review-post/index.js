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
  IconLeft,
} from "./styles/review-post-form";

export default function ReviewPost({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

ReviewPost.Nickname = function ReviewPostNickname({ children, ...rest }) {
  return <Nickname {...rest}>{children}</Nickname>;
};

ReviewPost.Form = function ReviewPost({ children, ...rest }) {
  return <Form {...rest}>{children}</Form>;
};

ReviewPost.Input = function ReviewPostInput({ children, inputRef, ...rest }) {
  return (
    <Input ref={inputRef} {...rest} autoComplete="off">
      {children}
    </Input>
  );
};

ReviewPost.Textfield = function ReviewPostTextfield({ textfieldRef, ...rest }) {
  return <Textfield ref={textfieldRef} {...rest} />;
};

ReviewPost.RadioWrapper = function ReviewPostRadioWrapper({
  children,
  ...rest
}) {
  return <RadioWrapper {...rest}>{children}</RadioWrapper>;
};

ReviewPost.RadioElement = function ReviewPostRadioElement({
  children,
  ...rest
}) {
  return <RadioElement {...rest} />;
};

ReviewPost.Button = function ReviewPostButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

ReviewPost.BackLink = function ReviewPostBackLink({ children, ...rest }) {
  return <BackLink {...rest}>{children}</BackLink>;
};

ReviewPost.ProfileWrapper = function ReviewPostProfileWrapper({
  children,
  ...rest
}) {
  return <ProfileWrapper {...rest}>{children}</ProfileWrapper>;
};

ReviewPost.Title = function ReviewPostTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

ReviewPost.RadioLabel = function ReviewPostRadioLabel({ children, ...rest }) {
  return <RadioLabel {...rest}>{children}</RadioLabel>;
};

ReviewPost.RadioInner = function ReviewPostRadioInner({ children, ...rest }) {
  return <RadioInner {...rest}>{children}</RadioInner>;
};

ReviewPost.RadioTitle = function ReviewPostRadioTitle({
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

ReviewPost.RadioElementsContainer = function ReviewPostRadioElementsContainer({
  children,
  ...rest
}) {
  return <RadioElementsContainer {...rest}>{children}</RadioElementsContainer>;
};

ReviewPost.Icon = function ReviewPostIcon({ children, ...rest }) {
  return <Icon {...rest}>{children}</Icon>;
};

ReviewPost.ButtonsWrapper = function ReviewPostButtonsWrapper({
  children,
  ...rest
}) {
  return <ButtonsWrapper {...rest}>{children}</ButtonsWrapper>;
};

ReviewPost.Avatar = function ReviewPostAvatar({ children, ...rest }) {
  return <Avatar {...rest}>{children}</Avatar>;
};

ReviewPost.IconLeft = function ReviewPostIconLeft({ children, ...rest }) {
  return <IconLeft {...rest}>{children}</IconLeft>;
};
