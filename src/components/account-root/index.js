import React from "react";

import {
  Container,
  Nickname,
  ColumnContainer,
  Avatar,
  Link,
  Title,
  Wrapper,
  Subtitle,
  TabInner,
} from "./styles/account-root";

export default function AccountRoot({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

AccountRoot.Nickname = function AccountNickname({ children, ...rest }) {
  return <Nickname {...rest}>{children}</Nickname>;
};

AccountRoot.ColumnContainer = function AccountColumnContainer({
  children,
  ...rest
}) {
  return <ColumnContainer {...rest}>{children}</ColumnContainer>;
};

AccountRoot.Avatar = function AccountAvatar({ children, ...rest }) {
  return <Avatar {...rest} />;
};

AccountRoot.Link = function AccountLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};

AccountRoot.Title = function AccountTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

AccountRoot.Wrapper = function AccountWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

AccountRoot.Subtitle = function AccountSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

AccountRoot.TabInner = function AccountTabInner({ children, ...rest }) {
  return <TabInner {...rest}>{children}</TabInner>;
};
