import React from "react";
import { CSSTransition } from "react-transition-group";
import { w300miniature } from "../../constants/constants";

import {
  Container,
  Column,
  Poster,
  Row,
  Fieldname,
  Fieldvalue,
  Placeholder,
  Biography,
  Title,
  Subtitle,
} from "./styles/actor-poster";

export default function ActorPoster({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

ActorPoster.Column = function ActorPosterColumn({
  type,
  visible,
  children,
  ...rest
}) {
  return (
    <CSSTransition
      in={visible}
      classNames="fade"
      appear={true}
      mountOnEnter
      unmountOnExit
      timeout={500}
      {...rest}
    >
      <Column type={type}>{children}</Column>
    </CSSTransition>
  );
};

ActorPoster.Poster = function ActorPosterPoster({ src, ...rest }) {
  return !!src ? (
    <Poster {...rest} src={`${w300miniature}${src}`} />
  ) : (
    <Placeholder src={"https://dummyimage.com/300x450/aaa/aaa"} />
  );
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
  const [...text] = children.split("\n");

  return (
    <Biography {...rest}>
      {text.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </Biography>
  );
};

ActorPoster.Title = function ActorPosterTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

ActorPoster.Subtitle = function ActorPosterSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};
