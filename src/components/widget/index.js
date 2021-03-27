import React from "react";

import {
  Container,
  Title,
  Arrow,
  List,
  Favorite,
  Subtitle,
  Item,
  Link,
  Heart,
} from "./styles/widget";

export default function Widget({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Widget.Title = function WidgetTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Widget.Arrow = function WidgetArrow({ ...rest }) {
  return <Arrow />;
};

Widget.List = function WidgetList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Widget.Favorite = function WidgetFavorite({ children, ...rest }) {
  return <Favorite {...rest}>{children}</Favorite>;
};

Widget.Subtitle = function WidgetSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Widget.Item = function WidgetItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Widget.Link = function WidgetLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};

Widget.Heart = function WidgetHeart({ ...rest }) {
  return <Heart />;
};
