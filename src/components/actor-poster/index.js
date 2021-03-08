import React from "react";

import {
  Container,
  Column,
  Poster,
  Info,
  Row,
  Fieldname,
  Fieldvalue,
  Biography,
  Title,
  Subtitle,
} from "./styles/actor-poster";

export default function ActorPoster({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

ActorPoster.Column = function ActorPosterColumn({ children, ...rest }) {
  return <Column {...rest}>{children}</Column>;
};

ActorPoster.Poster = function ActorPosterPoster({ ...rest }) {
  return <Poster {...rest} />;
};

ActorPoster.Info = function ActorPosterInfo({ children, ...rest }) {
  return <Info {...rest}>{children}</Info>;
};

ActorPoster.Row = function ActorPosterRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

ActorPoster.Fieldname = function ActorPosterFieldname({ children, ...rest }) {
  return <Fieldname {...rest}>{children}</Fieldname>;
};

ActorPoster.Fieldvalue = function ActorPosterFieldvalue({ children, ...rest }) {
  return <Fieldvalue {...rest}>{children}</Fieldvalue>;
};

ActorPoster.Biography = function ActorPosterBiography({ children, ...rest }) {
  return <Biography {...rest}>{children}</Biography>;
};

ActorPoster.Title = function ActorPosterTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

ActorPoster.Subtitle = function ActorPosterSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};
