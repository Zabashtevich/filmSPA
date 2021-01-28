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
} from "./styles/account";

export default function Account({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Account.Nickname = function AccountNickname({ children, ...rest }) {
  return <Nickname {...rest}>{children}</Nickname>;
};

Account.ColumnContainer = function AccountColumnContainer({
  children,
  ...rest
}) {
  return <ColumnContainer {...rest}>{children}</ColumnContainer>;
};

Account.Avatar = function AccountAvatar({ children, ...rest }) {
  return <Avatar {...rest} />;
};

Account.Link = function AccountLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};

Account.Title = function AccountTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Account.Wrapper = function AccountWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Account.Subtitle = function AccountSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Account.TabInner = function AccountTabInner({ children, ...rest }) {
  return <TabInner {...rest}>{children}</TabInner>;
};
