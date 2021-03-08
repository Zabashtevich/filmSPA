import React from "react";

import {
  Thumbnail,
  Placeholder,
  Arrow,
  Container,
  Close,
  Title,
  Userlist,
  Favorite,
  Subtitle,
  List,
  Item,
} from "./styles/widget";

export default function Widget({ children, ...rest }) {
  return <Thumbnail {...rest}>{children}</Thumbnail>;
}

Widget.Title = function WidgetTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Widget.Placeholder = function WidgetPlaceholder({ ...rest }) {
  return <Placeholder {...rest} />;
};

Widget.Arrow = function WidgetArrow({ ...rest }) {
  return <Arrow {...rest} />;
};

Widget.Container = function WidgetContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Widget.Close = function WidgetClose({ ...rest }) {
  return <Close {...rest} />;
};

Widget.Subtitle = function WidgetSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Widget.Userlist = function UserlistUserlist({ children, ...rest }) {
  return <Userlist {...rest}>{children}</Userlist>;
};

Widget.Favorite = function WidgetFavorite({ children, ...rest }) {
  return <Favorite {...rest}>{children}</Favorite>;
};

Widget.List = function WidgetList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Widget.Item = function WidgetItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};
