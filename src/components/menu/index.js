import React from "react";

import {
  Container,
  Wrapper,
  Title,
  Row,
  Category,
  Item,
  Subtitle,
  Default,
  Edit,
  Userlist,
  Links,
  Arrow,
  Link,
} from "./styles/menu";

export default function Menu({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Menu.Wrapper = function MenuWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Menu.Title = function MenuTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Menu.Row = function MenuRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

Menu.Category = function MenuCategory({ children, ...rest }) {
  return <Category {...rest}>{children}</Category>;
};

Menu.Item = function MenuItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Menu.Subtitle = function MenuSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Menu.Default = function MenuDefault({ ...rest }) {
  return <Default {...rest} />;
};

Menu.Edit = function MenuEdit({ ...rest }) {
  return <Edit {...rest} />;
};

Menu.Userlist = function MenuUserlist({ ...rest }) {
  return <Userlist {...rest} />;
};

Menu.Links = function MenuLinks({ ...rest }) {
  return <Links {...rest} />;
};

Menu.Arrow = function MenuArrow({ ...rest }) {
  return <Arrow {...rest} />;
};

Menu.Link = function MenuLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};
