import React, { useState } from "react";

import {
  Container,
  Header,
  Profile,
  Nickname,
  Avatar,
  Time,
  Body,
  Text,
  Paragraph,
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

Review.Avatar = function ReviewAvatar({ src, children, ...rest }) {
  return (
    <Avatar {...rest} src={src}>
      {children}
    </Avatar>
  );
};

Review.Time = function ReviewTime({ children, ...rest }) {
  return <Time {...rest}>{children}</Time>;
};

Review.Body = function ReviewBody({ children, ...rest }) {
  return <Body {...rest}>{children}</Body>;
};

Review.Text = function ReviewText({ children, ...rest }) {
  const [firstLine, ...rst] = children.split("\n");
  return (
    <Text {...rest}>
      <Paragraph>{firstLine}</Paragraph>
      {rst.length > 0 &&
        rst.map((item, i) => {
          if (item.indexOf("https") > -1) {
            return (
              <Link key={i} href={item} target="_blank">
                {item}
              </Link>
            );
          } else {
            return (
              <Paragraph key={i} style={{ margin: 0 }}>
                <br /> {item}
              </Paragraph>
            );
          }
        })}
    </Text>
  );
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
