import React from "react";

import {
  Container,
  Nickname,
  PosterColumn,
  ContentColumn,
  Avatar,
  Link,
  Title,
  Subtitle,
  Userlist,
} from "./styles/account-root";

export default function AccountRoot({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

AccountRoot.Nickname = function AccountRootNickname({ children, ...rest }) {
  return <Nickname {...rest}>{children}</Nickname>;
};

AccountRoot.PosterColumn = function AccountRootPosterColumn({
  children,
  ...rest
}) {
  return <PosterColumn {...rest}>{children}</PosterColumn>;
};

AccountRoot.ContentColumn = function AccountRootContentColumn({
  children,
  ...rest
}) {
  return <ContentColumn {...rest}>{children}</ContentColumn>;
};

AccountRoot.Avatar = function AccountRootAvatar({ children, ...rest }) {
  return <Avatar {...rest} />;
};

AccountRoot.Link = function AccountRootLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};

AccountRoot.Title = function AccountRootTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

AccountRoot.Subtitle = function AccountRootSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

AccountRoot.Userlist = function AccountRootUserlist({ children, ...rest }) {
  return <Userlist {...rest}>{children}</Userlist>;
};
