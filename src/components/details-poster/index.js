import React from "react";
import { CSSTransition } from "react-transition-group";

import { orinalImageSize, posterSize } from "../../constants/constants";
import {
  Container,
  Wallpaper,
  Column,
  Poster,
  Title,
  Overview,
  Subtitle,
  Row,
  Fieldname,
  Fieldvalue,
  Link,
  Inner,
} from "./styles/details-poster";

export default function DetailsPoster({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

DetailsPoster.Inner = function DetailsPosterInner({
  visible,
  children,
  ...rest
}) {
  return (
    <CSSTransition
      in={visible}
      timeout={500}
      classNames="fade"
      mountOnEnter
      unmountOnExit
      appear={true}
    >
      <Inner {...rest}>{children}</Inner>
    </CSSTransition>
  );
};

DetailsPoster.Wallpaper = function PosterSecrionWallpaper({ src, ...rest }) {
  return <Wallpaper {...rest} src={`${orinalImageSize + src}`} />;
};

DetailsPoster.Column = function DetailsPosterColumn({
  visible,
  type,
  children,
  ...rest
}) {
  return (
    <CSSTransition
      in={visible}
      timeout={500}
      classNames="fade"
      mountOnEnter
      unmountOnExit
      appear={true}
      {...rest}
    >
      <Column type={type}>{children}</Column>
    </CSSTransition>
  );
};

DetailsPoster.Poster = function DetailsPosterPoster({ src, ...rest }) {
  return <Poster src={`${posterSize + src}`} {...rest} />;
};

DetailsPoster.Title = function DetailsPosterTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

DetailsPoster.Overview = function DetailsPosterOverview({ children, ...rest }) {
  return <Overview {...rest}>{children}</Overview>;
};

DetailsPoster.Subtitle = function DetailsPosterSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

DetailsPoster.Row = function DetailsPosterRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

DetailsPoster.Fieldname = function DetailsPosterFieldname({
  children,
  ...rest
}) {
  return <Fieldname {...rest}>{children}</Fieldname>;
};

DetailsPoster.Fieldvalue = function DetailsPosterFieldvalue({
  children,
  ...rest
}) {
  return <Fieldvalue {...rest}>{children}</Fieldvalue>;
};

DetailsPoster.Link = function DetailsPosterLink({ children, ...rest }) {
  return <Link {...rest}>{children}</Link>;
};
