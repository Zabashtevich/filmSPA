import React from "react";

import {
  Container,
  Column,
  Poster,
  Nickname,
  Title,
  Section,
  Wrapper,
  Subtitle,
  Link,
  Linkicon,
  List,
  Item,
  Thumbnail,
  Info,
  Name,
  Amount,
  Settings,
  Placeholder,
} from "./styles/account";

export default function Account({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Account.Column = function AccountColumn({ children, ...rest }) {
  return <Column {...rest}>{children}</Column>;
};

Account.Poster = function AccountPoster({ ...rest }) {
  return <Poster {...rest} />;
};

Account.Nickname = function AccountNickname({ children, ...rest }) {
  return <Nickname {...rest}>{children}</Nickname>;
};

Account.Title = function AccountTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Account.Section = function AccountSection({ children, ...rest }) {
  return <Section {...rest}>{children}</Section>;
};

Account.Wrapper = function AccountWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Account.Subtitle = function AccountSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Account.Link = function AccountLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};

Account.Linkicon = function AccountLinkicon({ ...rest }) {
  return <Linkicon {...rest} />;
};

Account.List = function AccountList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Account.Item = function AccountItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Account.Thumbnail = function AccountThumbnail({ ...rest }) {
  return <Thumbnail {...rest} />;
};

Account.Info = function AccountInfo({ children, ...rest }) {
  return <Info {...rest}>{children}</Info>;
};

Account.Name = function AccountName({ children, ...rest }) {
  return <Name {...rest}>{children}</Name>;
};

Account.Amount = function AccountAmount({ children, ...rest }) {
  return <Amount {...rest}>{children}</Amount>;
};

Account.Settings = function AccountSettings({ ...rest }) {
  return <Settings {...rest} />;
};

Account.Placeholder = function AccountPlaceholder({ ...rest }) {
  return <Placeholder {...rest}>You have not any lists :c</Placeholder>;
};
