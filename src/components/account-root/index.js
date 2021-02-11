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
  Item,
  Icon,
  Info,
  Row,
  Name,
  Content,
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

AccountRoot.Item = function AccountRootItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

AccountRoot.Icon = function AccountRootIcon({ children, ...rest }) {
  return <Icon {...rest} />;
};

AccountRoot.Info = function AccountRootInfo({ children, ...rest }) {
  return <Info {...rest}>{children}</Info>;
};

AccountRoot.Row = function AccountRootRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

AccountRoot.Name = function AccountRootName({ children, ...rest }) {
  return <Name {...rest}>{children}</Name>;
};

AccountRoot.Content = function AccountRootContent({ children, ...rest }) {
  return <Content {...rest}>{children}</Content>;
};
