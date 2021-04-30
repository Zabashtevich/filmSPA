import React from "react";

import {
  Inner,
  Title,
  Category,
  Subtitle,
  Container,
  Item,
  Name,
  Link,
  Chain,
  Value,
  Thumbnail,
  Button,
  Close,
  List,
  Create,
  Subcategory,
  Arrow,
  Heart,
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

Nav.Subcategory = function NavSubcategory({ children, ...rest }) {
  return <Subcategory {...rest}>{children}</Subcategory>;
};

Nav.Container = function NavContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Nav.Item = function NavItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Nav.Name = function NavName({ children, ...rest }) {
  return <Name {...rest}>{children}</Name>;
};

Nav.Link = function NavLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};

Nav.Chain = function NavChain({ children, ...rest }) {
  return <Chain {...rest} />;
};

Nav.Value = function NavValue({ children, ...rest }) {
  return <Value {...rest}>{children}</Value>;
};

Nav.Thumbnail = function NavThumbnail({ children, ...rest }) {
  return <Thumbnail {...rest} />;
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

Nav.Create = function NavCreate({ ...rest }) {
  return <Create {...rest} />;
};

Nav.Heart = function NavHeart({ ...rest }) {
  return <Heart {...rest} />;
};

Nav.Arrow = function NavArrow({ ...rest }) {
  return <Arrow {...rest} />;
};
