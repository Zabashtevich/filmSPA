import React from "react";

import {
  Container,
  ItemContainer,
  Number,
  Name,
  Date,
  Add,
  Remove,
  Firstletter,
  Input,
  Confirm,
  Abort,
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

WatchList.Name = function WatchListName({ children, ...rest }) {
  return <Name {...rest}>{children}</Name>;
};

WatchList.Date = function WatchListDate({ children, ...rest }) {
  return <Date {...rest}>{children}</Date>;
};

WatchList.Add = function WatchListAdd({ children, ...rest }) {
  return <Add {...rest} />;
};

WatchList.Remove = function WatchListRemove({ children, ...rest }) {
  return <Remove {...rest} />;
};

WatchList.Firstletter = function WatchListFirstletter({ children, ...rest }) {
  return <Firstletter {...rest} />;
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
