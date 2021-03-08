import React from "react";
import { CSSTransition } from "react-transition-group";

import {
  Thumbnail,
  Placeholder,
  Arrow,
  Container,
  Heart,
  Title,
  Userlist,
  Favorite,
  Subtitle,
  List,
  Item,
  Link,
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

Widget.Container = function WidgetContainer({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="fade"
      appear={true}
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      <Container {...rest}>{children}</Container>
    </CSSTransition>
  );
};

Widget.Heart = function WidgetHeart({ visible, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="fade"
      appear={true}
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      <Heart {...rest} />
    </CSSTransition>
  );
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

Widget.List = function WidgetList({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="fade"
      appear={true}
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      <List {...rest}>{children}</List>
    </CSSTransition>
  );
};

Widget.Item = function WidgetItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Widget.Link = function WidgetLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};
