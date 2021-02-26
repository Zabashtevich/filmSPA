import React from "react";
import { CSSTransition } from "react-transition-group";

import {
  Face,
  Title,
  Button,
  Arrow,
  Chevron,
  Container,
  Subtitle,
  Name,
  Item,
  Backdrop,
  Element,
  Added,
  Wrapper,
  Link,
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

Widget.Chevron = function WidgetChevron({ ...rest }) {
  return <Chevron {...rest} />;
};

Widget.Container = function WidgetContainer({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="slide"
      appear={true}
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      <Container {...rest}>{children}</Container>
    </CSSTransition>
  );
};

Widget.Subtitle = function WidgetSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Widget.Name = function WidgetName({ children, ...rest }) {
  return <Name {...rest}>{children}</Name>;
};

Widget.Item = function WidgetItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Widget.Backdrop = function WidgetBackdrop({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="slide"
      appear={true}
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      <Backdrop {...rest}>{children}</Backdrop>
    </CSSTransition>
  );
};

Widget.Element = function WidgetElement({ children, ...rest }) {
  return <Element {...rest}>{children}</Element>;
};

Widget.Added = function WidgetAdded({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="fade"
      appear={true}
      mountOnEnter
      unmountOnExit
      timeout={500}
    >
      <Added {...rest} />
    </CSSTransition>
  );
};

Widget.Wrapper = function WidgetWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Widget.Link = function WidgetLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};
