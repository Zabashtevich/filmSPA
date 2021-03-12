import React from "react";

import {
  Container,
  Review,
  Header,
  Nickname,
  Avatar,
  Placeholder,
  Value,
  Date,
  Text,
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

Reviews.Avatar = function ReviewsAvatar({ src, ...rest }) {
  console.log(src);
  return <Avatar {...rest} />;
};

Reviews.Placeholder = function ReviewsPlaceholder({ ...rest }) {
  return <Placeholder {...rest} />;
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
