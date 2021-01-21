import React from "react";

import {
  Container,
  ItemContainer,
  Number,
  Name,
  Add,
  Remove,
  Input,
  Confirm,
  Abort,
  IconsWrapper,
  CreateTitle,
  CreateIcon,
  CreateListIconsWrapper,
  Placeholder,
  Delete,
} from "./styles/watch-list";

export default function WatchList({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

WatchList.ItemContainer = function WatchListItemContainer({
  children,
  ...rest
}) {
  return <ItemContainer {...rest}>{children}</ItemContainer>;
};

WatchList.Number = function WatchListNumber({ children, ...rest }) {
  return <Number {...rest}>{children}</Number>;
};

WatchList.Delete = function WatchListDelete({ children, ...rest }) {
  return <Delete {...rest}>{children}</Delete>;
};

WatchList.Name = function WatchListName({ children, ...rest }) {
  return <Name {...rest}>{children}</Name>;
};

WatchList.CreateTitle = function WatchListCreateTitle({ children, ...rest }) {
  return <CreateTitle {...rest}>{children}</CreateTitle>;
};

WatchList.Placeholder = function WatchListPlaceholder({ children, ...rest }) {
  return <Placeholder {...rest}>{children}</Placeholder>;
};

WatchList.IconsWrapper = function WatchListIconsWrapper({ children, ...rest }) {
  return <IconsWrapper {...rest}>{children}</IconsWrapper>;
};

WatchList.CreateListIconsWrapper = function WatchListCreateListIconsWrapper({
  children,
  ...rest
}) {
  return <CreateListIconsWrapper {...rest}>{children}</CreateListIconsWrapper>;
};

WatchList.Add = function WatchListAdd({ children, ...rest }) {
  return <Add {...rest} />;
};

WatchList.CreateIcon = function WatchListCreateIcon({ children, ...rest }) {
  return <CreateIcon {...rest} />;
};

WatchList.Remove = function WatchListRemove({ children, ...rest }) {
  return <Remove {...rest} />;
};

WatchList.Input = function WatchListInput({ children, ...rest }) {
  return <Input {...rest} />;
};

WatchList.Confirm = function WatchListConfirm({ children, ...rest }) {
  return <Confirm {...rest} />;
};

WatchList.Abort = function WatchListAbort({ children, ...rest }) {
  return <Abort {...rest} />;
};
