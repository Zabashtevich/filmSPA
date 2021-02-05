import React from "react";
import { CSSTransition } from "react-transition-group";

import {
  Container,
  Icon,
  PopupContainer,
  PopupNickname,
  PopupLink,
  PopupLogout,
  PopupEmail,
  PopupMetawrapper,
} from "./styles/header-profile";

export default function HeaderProfile({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

HeaderProfile.Icon = function HeaderProfileIcon({ ...rest }) {
  return <Icon {...rest} />;
};

HeaderProfile.PopupContainer = function HeaderProfilePopupContainer({
  children,
  visible,
  ...rest
}) {
  return (
    <CSSTransition
      appear={true}
      in={visible}
      timeout={{ enter: 600, exit: 600 }}
      unmountOnExit
      classNames="my-node"
    >
      <PopupContainer {...rest}>{children}</PopupContainer>
    </CSSTransition>
  );
};

HeaderProfile.PopupNickname = function HeaderProfilePopupNickname({
  children,
  ...rest
}) {
  return <PopupNickname {...rest}>{children}</PopupNickname>;
};

HeaderProfile.PopupLogout = function HeaderProfilePopupLogout({
  children,
  ...rest
}) {
  return <PopupLogout {...rest}>{children}</PopupLogout>;
};

HeaderProfile.PopupLink = function HeaderProfilePopupLink({
  children,
  ...rest
}) {
  return <PopupLink {...rest}>{children}</PopupLink>;
};

HeaderProfile.PopupEmail = function HeaderProfilePopupEmail({
  children,
  ...rest
}) {
  return <PopupEmail {...rest}>{children}</PopupEmail>;
};

HeaderProfile.PopupMetawrapper = function HeaderProfilePopupMetawrapper({
  children,
  ...rest
}) {
  return <PopupMetawrapper {...rest}>{children}</PopupMetawrapper>;
};
