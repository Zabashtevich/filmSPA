import React from "react";

import {
  Container,
  Review,
  Header,
  Nickname,
  Avatar,
  Value,
  Date,
  Text,
  Createreview,
  Input,
  Textarea,
  Cancel,
  Submit,
} from "./styles/reviews";

export default function Reviews({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Reviews.Review = function ReviewsReview({ children, ...rest }) {
  return <Review {...rest}>{children}</Review>;
};

Reviews.Header = function ReviewsHeader({ children, ...rest }) {
  return <Header {...rest}>{children}</Header>;
};

Reviews.Nickname = function ReviewsNickname({ children, ...rest }) {
  return <Nickname {...rest}>{children}</Nickname>;
};

Reviews.Avatar = function ReviewsAvatar({ children, ...rest }) {
  return <Avatar {...rest}>{children}</Avatar>;
};

Reviews.Value = function ReviewsValue({ children, ...rest }) {
  return <Value {...rest}>{children}</Value>;
};

Reviews.Date = function ReviewsDate({ children, ...rest }) {
  return <Date {...rest}>{children}</Date>;
};

Reviews.Text = function ReviewsText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

Reviews.Createreview = function ReviewsCreatereview({ children, ...rest }) {
  return <Createreview {...rest}>{children}</Createreview>;
};

Reviews.Input = function ReviewsInput({ children, ...rest }) {
  return <Input {...rest}>{children}</Input>;
};

Reviews.Textarea = function ReviewsTextarea({ children, ...rest }) {
  return <Textarea {...rest}>{children}</Textarea>;
};

Reviews.Cancel = function ReviewsCancel({ children, ...rest }) {
  return <Cancel {...rest}>{children}</Cancel>;
};

Reviews.Submit = function ReviewsSubmit({ children, ...rest }) {
  return <Submit {...rest}>{children}</Submit>;
};
