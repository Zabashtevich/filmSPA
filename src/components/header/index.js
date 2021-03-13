import React from "react";

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
  Edit,
  Signout,
} from "./styles/header";

export default function Header({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Header.Logo = function HeaderLogo({ ...rest }) {
  return <Logo {...rest} />;
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

Header.Input = function HeaderInput({ inputref, ...rest }) {
  return <Input {...rest} ref={inputref} />;
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

Header.Popup = function HeaderPopup({ children, ...rest }) {
  return <Popup {...rest}>{children}</Popup>;
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

Header.Edit = function HeaderEdit({ children, ...rest }) {
  return <Edit {...rest}>{children}</Edit>;
};

Header.Signout = function HeaderSignout({ children, ...rest }) {
  return <Signout {...rest}>{children}</Signout>;
};
