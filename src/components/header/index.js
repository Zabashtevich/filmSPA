import React from "react";

import {
  Container,
  Nav,
  Logo,
  Wrapper,
  Link,
  Button,
  Close,
  Search,
  Profile,
  Avatar,
  Popup,
  Nickname,
  Mail,
  Item,
} from "./styles/header";

export default function Header({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Header.Nav = function HeaderNav({ children, ...rest }) {
  return <Nav {...rest}>{children}</Nav>;
};

Header.Logo = function HeaderLogo({ children, ...rest }) {
  return <Logo {...rest}>{children}</Logo>;
};

Header.Wrapper = function HeaderWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Header.Link = function HeaderLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};

Header.Button = function HeaderButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

Header.Search = function HeaderSearch({ children, ...rest }) {
  return <Search {...rest} />;
};

Header.Close = function HeaderClose({ children, ...rest }) {
  return <Close {...rest} />;
};

Header.Profile = function HeaderProfile({ children, ...rest }) {
  return <Profile {...rest}>{children}</Profile>;
};

Header.Avatar = function HeaderAvatar({ children, ...rest }) {
  return <Avatar {...rest} />;
};

Header.Popup = function HeaderPopup({ children, ...rest }) {
  return <Popup {...rest}>{children}</Popup>;
};

Header.Nickname = function HeaderNickname({ children, ...rest }) {
  return <Nickname {...rest}>{children}</Nickname>;
};

Header.Mail = function HeaderMail({ children, ...rest }) {
  return <Mail {...rest}>{children}</Mail>;
};

Header.Item = function HeaderItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};
