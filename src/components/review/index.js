import React from "react";

import {
  Container,
  Header,
  Profile,
  Nickname,
  Avatar,
  Body,
  Text,
  Link,
  Show,
  Delete,
} from "./styles/review";

export default function Review({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Review.Header = function ReviewHeader({ children, ...rest }) {
  return <Header {...rest}>{children}</Header>;
};

Review.Profile = function ReviewProfile({ children, ...rest }) {
  return <Profile {...rest}>{children}</Profile>;
};

Review.Nickname = function ReviewNickname({ children, ...rest }) {
  return <Nickname {...rest}>{children}</Nickname>;
};

Review.Avatar = function ReviewAvatar({ children, ...rest }) {
  return <Avatar {...rest}>{children}</Avatar>;
};

Review.Body = function ReviewBody({ children, ...rest }) {
  return <Body {...rest}>{children}</Body>;
};

Review.Text = function ReviewText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

Review.Link = function ReviewLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};

Review.Show = function ReviewShow({ children, ...rest }) {
  return <Show {...rest}>{children}</Show>;
};

Review.Delete = function ReviewDelete({ children, ...rest }) {
  return <Delete {...rest}>{children}</Delete>;
};
