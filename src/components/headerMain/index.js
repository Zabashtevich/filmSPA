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
} from "./styles/header-main";

export default function HeaderMain({ children, ...rest }) {
  return (
    <Background>
      <Container {...rest}>{children}</Container>
    </Background>
  );
}

HeaderMain.Logo = function HeaderMainLogo({ children, ...rest }) {
  return <Logo {...rest}>{children}</Logo>;
};

HeaderMain.Link = function HeaderMainLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};

HeaderMain.Inner = function HeaderMainInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

HeaderMain.Profile = function HeaderMainProfile({ children, ...rest }) {
  return <Profile {...rest}>{children}</Profile>;
};

HeaderMain.Input = function HeaderMainInput({ children, ...rest }) {
  return <Input {...rest}>{children}</Input>;
};

HeaderMain.Icon = function HeaderMainIcon({ children, ...rest }) {
  return <Icon {...rest}>{children}</Icon>;
};
