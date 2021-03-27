import React from "react";
import { CSSTransition } from "react-transition-group";

import {
  Container,
  Wrapper,
  Title,
  Arrow,
  List,
  Favorite,
  Name,
  Subtitle,
  Item,
  Link,
  Heart,
} from "./styles/widget";

export default function Widget({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Widget.Wrapper = function WidgetWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Widget.Title = function WidgetTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Widget.Arrow = function WidgetArrow({ ...rest }) {
  return <Arrow {...rest} />;
};

Widget.List = function WidgetList({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="slide"
      appear={true}
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      <List {...rest}>{children}</List>
    </CSSTransition>
  );
};

Widget.Favorite = function WidgetFavorite({ children, ...rest }) {
  return <Favorite {...rest}>{children}</Favorite>;
};

Widget.Name = function WidgetName({ children, ...rest }) {
  return <Name {...rest}>{children}</Name>;
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
