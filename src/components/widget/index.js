import React from "react";

import {
  Face,
  Title,
  Button,
  Arrow,
  Container,
  Subtitle,
  Item,
  Backdrop,
  Element,
  Added,
} from "./styles/widget";

export default function Widget({ children, ...rest }) {
  return <Face {...rest}>{children}</Face>;
}

Widget.Title = function WidgetTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Widget.Button = function WidgetButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

Widget.Arrow = function WidgetArrow({ ...rest }) {
  return <Arrow {...rest} />;
};

Widget.Container = function WidgetContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Widget.Subtitle = function WidgetSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Widget.Item = function WidgetItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Widget.Backdrop = function WidgetBackdrop({ children, ...rest }) {
  return <Backdrop {...rest}>{children}</Backdrop>;
};

Widget.Element = function WidgetElement({ children, ...rest }) {
  return <Element {...rest}>{children}</Element>;
};

Widget.Added = function WidgetAdded({ children, ...rest }) {
  return <Added {...rest} />;
};
