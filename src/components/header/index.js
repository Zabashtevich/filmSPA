import React from "react";
import {
  Container,
  Logo,
  Link,
  Inner,
  Input,
  Profile,
  Background,
  Icon,
  Wrapper,
} from "./styles/header-main";

export default function Header({ children, ...rest }) {
  return (
    <Background>
      <Container {...rest}>{children}</Container>
    </Background>
  );
}

Header.Logo = function HeaderLogo({ children, ...rest }) {
  return <Logo {...rest}>{children}</Logo>;
};

Header.Link = function HeaderLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};

Header.Inner = function HeaderInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

Header.Profile = function HeaderProfile({ children, ...rest }) {
  return <Profile {...rest}>{children}</Profile>;
};

Header.Input = function HeaderInput({ children, ...rest }) {
  return <Input {...rest} />;
};

Header.Icon = function HeaderIcon({ children, ...rest }) {
  return <Icon {...rest}>{children}</Icon>;
};

Header.Wrapper = function HeaderWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};
