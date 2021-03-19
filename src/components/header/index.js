import React from "react";
import { CSSTransition } from "react-transition-group";

import {
  Container,
  Logo,
  Wrapper,
  Link,
  Inner,
  Input,
  Icon,
  Profile,
  Avatar,
  Popup,
  Info,
  Name,
  Mail,
  Account,
  Signout,
} from "./styles/header";

export default function Header({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="slide"
      appear={true}
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      <Container {...rest}>{children}</Container>
    </CSSTransition>
  );
}

Header.Logo = function HeaderLogo({ children, ...rest }) {
  return <Logo {...rest}>{children}</Logo>;
};

Header.Wrapper = function HeaderWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Header.Link = function HeaderLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};

Header.Inner = function HeaderInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

Header.Input = function HeaderInput({ ...rest }) {
  return <Input {...rest} />;
};

Header.Icon = function HeaderIcon({ ...rest }) {
  return <Icon {...rest} />;
};

Header.Profile = function HeaderProfile({ children, ...rest }) {
  return <Profile {...rest}>{children}</Profile>;
};

Header.Avatar = function HeaderAvatar({ ...rest }) {
  return <Avatar {...rest} />;
};

Header.Popup = function HeaderPopup({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="slide"
      appear={true}
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      <Popup {...rest}>{children}</Popup>
    </CSSTransition>
  );
};

Header.Info = function HeaderInfo({ children, ...rest }) {
  return <Info {...rest}>{children}</Info>;
};

Header.Name = function HeaderName({ children, ...rest }) {
  return <Name {...rest}>{children}</Name>;
};

Header.Mail = function HeaderMail({ children, ...rest }) {
  return <Mail {...rest}>{children}</Mail>;
};

Header.Account = function HeaderAccount({ children, ...rest }) {
  return <Account {...rest}>{children}</Account>;
};

Header.Signout = function HeaderSignout({ children, ...rest }) {
  return <Signout {...rest}>{children}</Signout>;
};
