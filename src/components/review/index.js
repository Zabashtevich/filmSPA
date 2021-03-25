import React from "react";

import {
  Container,
  Item,
  Header,
  Avatar,
  Nickname,
  Value,
  Date,
  Content,
  Text,
  Link,
  Paragraph,
  All,
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

Review.Content = function ReviewContent({ children, ...rest }) {
  return <Content {...rest}>{children}</Content>;
};

Review.Text = function ReviewText({ children, ...rest }) {
  return <Text {...rest}>{children}</Text>;
};

Review.Link = function ReviewLink({ children, ...rest }) {
  return (
    <Link {...rest} target="_blanc">
      {children}
    </Link>
  );
};

Review.Paragraph = function ReviewParagraph({ children, ...rest }) {
  return <Paragraph {...rest}>{children}</Paragraph>;
};

Review.All = function ReviewAll({ children, ...rest }) {
  return <All {...rest}>{children}</All>;
};
