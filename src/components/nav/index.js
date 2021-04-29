import React from "react";

import {
  Inner,
  Title,
  Category,
  Subtitle,
  Container,
  Item,
  Button,
  Close,
  List,
  Account,
  Return,
  Create,
} from "./styles/nav";

export default function Nav({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
}

Nav.Title = function NavTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Nav.Category = function NavCategory({ children, ...rest }) {
  return <Category {...rest}>{children}</Category>;
};

Nav.Subtitle = function NavSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Nav.Container = function NavContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Nav.Item = function NavItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Nav.Button = function NavButton({ ...rest }) {
  return <Button {...rest} />;
};

Nav.Close = function NavClose({ ...rest }) {
  return <Close {...rest} />;
};

Nav.List = function NavList({ ...rest }) {
  return <List {...rest} />;
};

Nav.Account = function NavAccount({ ...rest }) {
  return <Account {...rest} />;
};

Nav.Return = function NavReturn({ ...rest }) {
  return <Return {...rest} />;
};

Nav.Create = function NavCreate({ ...rest }) {
  return <Create {...rest} />;
};
