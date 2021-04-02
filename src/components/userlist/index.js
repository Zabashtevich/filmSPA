import React from "react";

import {
  Container,
  Column,
  Category,
  Item,
  Arrow,
  Content,
  Title,
  Form,
  Subtitle,
  Row,
  Icon,
  Input,
  Wrapper,
  Accept,
  Delete,
} from "./styles/userlist";

export default function Userlist({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Userlist.Column = function UserlistColumn({ children, ...rest }) {
  return <Column {...rest}>{children}</Column>;
};

Userlist.Category = function UserlistCategory({ children, ...rest }) {
  return <Category {...rest}>{children}</Category>;
};

Userlist.Item = function UserlistItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Userlist.Arrow = function UserlistArrow({ ...rest }) {
  return <Arrow {...rest} />;
};

Userlist.Content = function UserlistContent({ children, ...rest }) {
  return <Content {...rest}>{children}</Content>;
};

Userlist.Title = function UserlistTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Userlist.Form = function UserlistForm({ children, ...rest }) {
  return <Form {...rest}>{children}</Form>;
};

Userlist.Subtitle = function UserlistSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Userlist.Row = function UserlistRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

Userlist.Icon = function UserlistIcon({ ...rest }) {
  return <Icon {...rest} />;
};

Userlist.Input = function UserlistInput({ ...rest }) {
  return <Input {...rest} />;
};

Userlist.Wrapper = function UserlistWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Userlist.Accept = function UserlistAccept({ children, ...rest }) {
  return <Accept {...rest}>{children}</Accept>;
};

Userlist.Delete = function UserlistDelete({ children, ...rest }) {
  return <Delete {...rest}>{children}</Delete>;
};
