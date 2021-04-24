import React from "react";

import {
  Outer,
  Container,
  Title,
  Subtitle,
  List,
  Item,
  Thumbnail,
  Name,
  Arrow,
  Footer,
  Link,
} from "./styles/menu";

export default function Menu({ children, ...rest }) {
  return <Outer {...rest}>{children}</Outer>;
}

Menu.Container = function MenuContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Menu.Title = function MenuTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Menu.Subtitle = function MenuSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Menu.List = function MenuList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Menu.Item = function MenuItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Menu.Thumbnail = function MenuThumbnail({ ...rest }) {
  return <Thumbnail {...rest} />;
};

Menu.Name = function MenuName({ children, ...rest }) {
  return <Name {...rest}>{children}</Name>;
};

Menu.Arrow = function MenuArrow({ ...rest }) {
  return <Arrow {...rest} />;
};

Menu.Footer = function MenuFooter({ children, ...rest }) {
  return <Footer {...rest}>{children}</Footer>;
};

Menu.Link = function MenuLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};
