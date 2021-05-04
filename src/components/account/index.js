import React from "react";

import {
  Container,
  Column,
  Poster,
  Nickname,
  Content,
  Title,
  Placeholder,
} from "./styles/account";

export default function Account({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Account.Column = function AccountColumn({ children, ...rest }) {
  return <Column>{children}</Column>;
};

Account.Poster = function AccountPoster({ ...rest }) {
  return <Poster {...rest} />;
};

Account.Nickname = function AccountNickname({ children, ...rest }) {
  return <Nickname>{children}</Nickname>;
};

Account.Content = function AccountContent({ children, ...rest }) {
  return <Content>{children}</Content>;
};

Account.Title = function AccountTitle({ children, ...rest }) {
  return <Title>{children}</Title>;
};

Account.Placeholder = function AccountPlaceholder({ children, ...rest }) {
  return <Placeholder>{children}</Placeholder>;
};
