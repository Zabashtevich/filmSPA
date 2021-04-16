import React from "react";

import {
  Container,
  Inner,
  Input,
  Magnifier,
  List,
  Item,
  Subtitle,
  Placeholder,
} from "./styles/bar";

export default function Bar({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Bar.Inner = function BarInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

Bar.Input = function BarInput({ ...rest }) {
  return <Input {...rest} />;
};

Bar.Magnifier = function BarMagnifier({ ...rest }) {
  return <Magnifier {...rest} />;
};

Bar.Close = function BarClose({ ...rest }) {
  return <Close {...rest} />;
};

Bar.List = function BarList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Bar.Item = function BarItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Bar.Subtitle = function BarSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Bar.Placeholder = function BarPlaceholder({ children, ...rest }) {
  return <Placeholder {...rest}>{children}</Placeholder>;
};

Bar.Backrop = function BarBackrop({ children, ...rest }) {
  return <Backrop {...rest} />;
};
