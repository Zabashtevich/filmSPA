import React from "react";

import {
  Container,
  Icon,
  PopupContainer,
  PopupItem,
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

HeaderProfile.PopupItem = function HeaderProfilePopupItem({
  children,
  ...rest
}) {
  return <PopupItem {...rest}>{children}</PopupItem>;
};
