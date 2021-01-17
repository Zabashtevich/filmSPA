import React from "react";

import {
  Container,
  Wrapper,
  ItemIcon,
  CreateIcon,
  Warning,
  ItemName,
  InputName,
  InputLabel,
  CreateButton,
  CloseButton,
  ButtonsWrapper,
} from "./styles/watch-list";

export default function WatchList({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

WatchList.Wrapper = function WatchListWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

WatchList.ItemIcon = function WatchListItemIcon({ ...rest }) {
  return <ItemIcon {...rest} />;
};

WatchList.CreateIcon = function WatchListCreateIcon({ ...rest }) {
  return <CreateIcon {...rest} />;
};

WatchList.Warning = function WatchListWarning({ children, ...rest }) {
  return <Warning {...rest}>{children}</Warning>;
};

WatchList.ItemName = function WatchListItemName({ children, ...rest }) {
  return <ItemName {...rest}>{children}</ItemName>;
};

WatchList.InputName = function WatchListInputName({ children, ...rest }) {
  return <InputName {...rest} />;
};

WatchList.InputLabel = function WatchListInputLabel({ children, ...rest }) {
  return <InputLabel {...rest}>{children}</InputLabel>;
};

WatchList.CreateButton = function WatchListCreateButton({ children, ...rest }) {
  return <CreateButton {...rest}>{children}</CreateButton>;
};

WatchList.CloseButton = function WatchListCloseButton({ children, ...rest }) {
  return <CloseButton {...rest}>{children}</CloseButton>;
};

WatchList.ButtonsWrapper = function WatchListButtonsWrapper({
  children,
  ...rest
}) {
  return <ButtonsWrapper {...rest}>{children}</ButtonsWrapper>;
};
