import React from "react";
import { CSSTransition } from "react-transition-group";

import {
  Outer,
  Title,
  Arrow,
  Popup,
  Subtitle,
  Container,
  Item,
  Name,
  Heart,
} from "./styles/widget";

export default function Widget({ children, ...rest }) {
  return <Outer {...rest}>{children}</Outer>;
}

Widget.Title = function WidgetTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Widget.Arrow = function WidgetArrow({ children, ...rest }) {
  return <Arrow {...rest} />;
};

Widget.Popup = function WidgetPopup({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="fade"
      timeout={500}
      mountOnEnter
      unmountOnExit
    >
      <Popup {...rest}>{children}</Popup>
    </CSSTransition>
  );
};

Widget.Subtitle = function WidgetSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Widget.Container = function WidgetContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Widget.Item = function WidgetItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Widget.Name = function WidgetName({ children, ...rest }) {
  return <Name {...rest}>{children}</Name>;
};

Widget.Heart = function WidgetHeart({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="fade"
      timeout={500}
      mountOnEnter
      unmountOnExit
    >
      <Heart {...rest} />
    </CSSTransition>
  );
};
