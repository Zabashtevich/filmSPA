import React from "react";

import { CSSTransition } from "react-transition-group";
import { w300miniature } from "../../constants/constants";

import {
  Container,
  Column,
  Wrapper,
  Content,
  Poster,
  Subtitle,
  Row,
  Title,
  Fieldname,
  Fieldvalue,
  Overview,
} from "./styles/actor";

export default function Actor({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Actor.Column = function ActorColumn({ children, ...rest }) {
  return <Column {...rest}>{children}</Column>;
};

Actor.Wrapper = function ActorWrapper({ children, ...rest }) {
  return (
    <CSSTransition
      in={true}
      classNames="fade"
      timeout={1000}
      appear={true}
      mountOnEnter
    >
      <Wrapper {...rest}>{children}</Wrapper>
    </CSSTransition>
  );
};

Actor.Content = function ActorContent({ children, ...rest }) {
  return <Content {...rest}>{children}</Content>;
};

Actor.Poster = function ActorPoster({ slug, ...rest }) {
  return <Poster {...rest} src={`${w300miniature + slug}`} />;
};

Actor.Subtitle = function ActorSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};

Actor.Row = function ActorRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

Actor.Fieldname = function ActorFieldname({ children, ...rest }) {
  return <Fieldname {...rest}>{children}</Fieldname>;
};

Actor.Fieldvalue = function ActorFieldvalue({ children, ...rest }) {
  return <Fieldvalue {...rest}>{children}</Fieldvalue>;
};

Actor.Title = function ActorTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Actor.Overview = function ActorOverview({ children, ...rest }) {
  return <Overview {...rest}>{children}</Overview>;
};
