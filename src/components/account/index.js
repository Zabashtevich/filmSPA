import React from "react";

import {
  Container,
  Column,
  Poster,
  Nickname,
  List,
  Settings,
  Title,
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

Account.List = function AccountList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Account.Settings = function AccountSettings({ ...rest }) {
  return <Settings {...rest} />;
};

Account.Title = function AccountTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};
