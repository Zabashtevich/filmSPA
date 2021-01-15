import React from "react";

import {
  Container,
  Icon,
  PopupContainer,
  PopupNickname,
  PopupLink,
  PopupLogout,
  PopupEmail,
} from "./styles/header-profile";

export default function HeaderProfile({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

HeaderProfile.Icon = function HeaderProfileIcon({ ...rest }) {
  return <Icon {...rest} />;
};

HeaderProfile.PopupContainer = function HeaderProfilePopupContainer({
  children,
  ...rest
}) {
  return <PopupContainer {...rest}>{children}</PopupContainer>;
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
