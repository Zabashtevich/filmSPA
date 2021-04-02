import React from "react";

import {
  Container,
  Title,
  Row,
  Category,
  Item,
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
