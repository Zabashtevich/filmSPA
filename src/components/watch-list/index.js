import React from "react";

import {
  Container,
  Wrapper,
  ItemIcon,
  CreateIcon,
  WarningWrapper,
  WarningMessage,
  ItemName,
  InputName,
  InputLabel,
  CreateButton,
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

WatchList.WarningWrapper = function WatchListWarningWrapper({
  children,
  ...rest
}) {
  return <WarningWrapper {...rest}>{children}</WarningWrapper>;
};

WatchList.WarningMessage = function WatchListWarningMessage({
  children,
  ...rest
}) {
  return <WarningMessage {...rest}>{children}</WarningMessage>;
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
