import React from "react";
import { CSSTransition } from "react-transition-group";

import {
  Container,
  Inner,
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
  Logout,
} from "./styles/header";

export default function Header({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Header.Inner = function HeaderInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

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

Header.Avatar = function HeaderAvatar({ src, children, ...rest }) {
  return (
    <Avatar
      {...rest}
      src={src ? src : "https://dummyimage.com/50x50/aaa/aaa"}
    />
  );
};

Header.Popup = function HeaderPopup({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      appear={true}
      mountOnEnter
      unmountOnExit
      timeout={500}
      classNames="slide"
    >
      <Popup {...rest}>{children}</Popup>
    </CSSTransition>
  );
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

Header.Logout = function HeaderLogout({ children, ...rest }) {
  return <Logout {...rest}>{children}</Logout>;
};
