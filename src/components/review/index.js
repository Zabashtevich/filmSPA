import React from "react";

import {
  Container,
  Item,
  Header,
  Avatar,
  Nickname,
  Value,
  Date,
  Star,
  Body,
  Content,
  Load,
} from "./styles/review";

export default function Review({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Review.Item = function ReviewItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Review.Header = function ReviewHeader({ children, ...rest }) {
  return <Header {...rest}>{children}</Header>;
};

Review.Avatar = function ReviewAvatar({ ...rest }) {
  return <Avatar {...rest} />;
};

Review.Nickname = function ReviewNickname({ children, ...rest }) {
  return <Nickname {...rest}>{children}</Nickname>;
};

Review.Value = function ReviewValue({ children, ...rest }) {
  return <Value {...rest}>{children}</Value>;
};

Review.Date = function ReviewDate({ children, ...rest }) {
  return <Date {...rest}>{children}</Date>;
};

Review.Star = function ReviewStar({ ...rest }) {
  return <Star {...rest} />;
};

Review.Body = function ReviewBody({ children, ...rest }) {
  return <Body {...rest}>{children}</Body>;
};

Review.Content = function ReviewContent({ children, ...rest }) {
  return <Content {...rest}>{children}</Content>;
};

Review.Load = function ReviewLoad({ children, ...rest }) {
  return <Load {...rest}>{children}</Load>;
};
