import React from "react";
import { CSSTransition } from "react-transition-group";

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
  return (
    <CSSTransition
      in={true}
      appear={true}
      classNames="opacity"
      mountOnEnter
      unmountOnExit
      timeout={{ enter: 500, exit: 500, appear: 500 }}
    >
      <Container {...rest}>{children}</Container>
    </CSSTransition>
  );
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
          return item.indexOf("https") > -1 ? (
            <Link key={i} href={item} target="_blank">
              {item}
            </Link>
          ) : (
            <Paragraph key={i}>{item}</Paragraph>
          );
        })}
    </Text>
  );
};

Review.Link = function ReviewLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};

Review.Show = function ReviewShow({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="opacity"
      appear={true}
      mountOnEnter
      unmountOnExit
      timeout={{ enter: 50000, exit: 50000, appear: 50000 }}
    >
      <Show {...rest}>{children}</Show>
    </CSSTransition>
  );
};

Review.Delete = function ReviewDelete({ children, ...rest }) {
  return <Delete {...rest}>{children}</Delete>;
};
