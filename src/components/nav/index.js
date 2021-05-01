import React from "react";

import {
  Inner,
  Title,
  Category,
  Devider,
  Subtitle,
  Container,
  Footer,
  Link,
  Chain,
  Value,
  Dot,
  Create,
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

Nav.Devider = function NavDevider({ children, ...rest }) {
  return <Devider {...rest}>{children}</Devider>;
};

Nav.Subtitle = function NavSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Nav.Container = function NavContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Nav.Footer = function NavFooter({ children, ...rest }) {
  return <Footer {...rest}>{children}</Footer>;
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

Nav.Dot = function NavDot({ children, ...rest }) {
  return <Dot {...rest} />;
};

Nav.Create = function NavCreate({ ...rest }) {
  return <Create {...rest} />;
};

Nav.Heart = function NavHeart({ ...rest }) {
  return <Heart {...rest} />;
};
