import React from "react";

import {
  Container,
  Wrapper,
  Title,
  Section,
  Row,
  Category,
  Item,
  Create,
  Plus,
  Subtitle,
  Default,
  Edit,
  Userlist,
  Links,
  Arrow,
  Link,
  Circle,
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

Menu.Section = function MenuSection({ children, ...rest }) {
  return <Section {...rest}>{children}</Section>;
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

Menu.Create = function MenuCreate({ children, ...rest }) {
  return <Create {...rest}>{children}</Create>;
};

Menu.Plus = function MenuPlus({ children, ...rest }) {
  return <Plus {...rest}>{children}</Plus>;
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

Menu.Circle = function MenuCircle({ ...rest }) {
  return <Circle {...rest} />;
};
