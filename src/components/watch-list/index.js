import React from "react";

import {
  Container,
  Wrapper,
  ItemIcon,
  CreateIcon,
  Placeholder,
  Warning,
  ItemName,
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

WatchList.Placeholder = function WatchListPlaceholder({ children, ...rest }) {
  return <Placeholder {...rest}>{children}</Placeholder>;
};

WatchList.Warning = function WatchListWarning({ children, ...rest }) {
  return <Warning {...rest}>{children}</Warning>;
};

WatchList.ItemName = function WatchListItemName({ children, ...rest }) {
  return <ItemName {...rest}>{children}</ItemName>;
};
