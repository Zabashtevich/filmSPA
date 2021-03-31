import React from "react";

import {
  Container,
  Column,
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

Actor.Poster = function ActorPoster({ ...rest }) {
  return <Poster {...rest} />;
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
