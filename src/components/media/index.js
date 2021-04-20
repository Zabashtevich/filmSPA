import React from "react";
import { CSSTransition } from "react-transition-group";
import { w200miniature } from "../../constants/constants";

import {
  Container,
  Header,
  Title,
  All,
  Scroller,
  Poster,
} from "./styles/media";

export default function Media({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Media.Header = function MediaHeader({ children, ...rest }) {
  return <Header {...rest}>{children}</Header>;
};

Media.Title = function MediaTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Media.All = function MediaAll({ children, ...rest }) {
  return <All {...rest}>{children}</All>;
};

Media.Scroller = function MediaScroller({ children, ...rest }) {
  return <Scroller {...rest}>{children}</Scroller>;
};

Media.Poster = function MediaPoster({ slug, ...rest }) {
  return (
    <CSSTransition
      in={true}
      appear={true}
      mountOnEnter
      unmountOnExit
      timeout={{ enter: 500, exit: 0, appear: 500 }}
      classNames="fade"
    >
      <Poster {...rest} src={`${w200miniature + slug}`} />
    </CSSTransition>
  );
};
