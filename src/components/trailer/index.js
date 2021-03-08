import React from "react";
import { CSSTransition } from "react-transition-group";

import { w200miniature } from "../../constants/constants";

import {
  Backdrop,
  Close,
  List,
  Videoplayer,
  Wrapper,
  Info,
  Title,
  Description,
  Row,
  Average,
  Amount,
  Container,
  Item,
  Preview,
  Subtitle,
  Poster,
  Meta,
} from "./styles/trailer";

export default function Trailer({ visible, children, ...rest }) {
  return (
    <CSSTransition
      classNames="fade"
      appear={true}
      mountOnEnter
      unmountOnExit
      timeout={500}
      in={true}
    >
      <Backdrop {...rest}>{children}</Backdrop>
    </CSSTransition>
  );
}

Trailer.Close = function TrailerClose({ ...rest }) {
  return <Close {...rest} />;
};

Trailer.Container = function TrailerContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Trailer.Videoplayer = function TrailerVideoplayer({ src, ...rest }) {
  return (
    <Videoplayer
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      src={`https://www.youtube.com/embed/${src}`}
      width="1140"
      height="850"
      webkitallowfullscreen
      mozallowfullscreen
      allowfullscreen
      {...rest}
    />
  );
};

Trailer.Wrapper = function TrailerWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Trailer.Info = function TrailerInfo({ children, ...rest }) {
  return <Info {...rest}>{children}</Info>;
};

Trailer.Poster = function TrailerPoster({ src, ...rest }) {
  return <Poster {...rest} src={`${w200miniature + src}`} />;
};

Trailer.Meta = function TrailerMeta({ children, ...rest }) {
  return <Meta {...rest}>{children}</Meta>;
};

Trailer.Title = function TrailerTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Trailer.Description = function TrailerDescription({ children, ...rest }) {
  return <Description {...rest}>{children}</Description>;
};

Trailer.Row = function TrailerRow({ children, ...rest }) {
  return <Row {...rest}>{children}</Row>;
};

Trailer.Average = function TrailerAverage({ children, ...rest }) {
  return <Average {...rest}>{children}</Average>;
};

Trailer.Amount = function TrailerAmount({ children, ...rest }) {
  return <Amount {...rest}>{children}</Amount>;
};

Trailer.List = function TrailerList({ children, ...rest }) {
  return <List {...rest}>{children}</List>;
};

Trailer.Item = function TrailerItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

Trailer.Preview = function TrailerPreview({ src, ...rest }) {
  return (
    <Preview
      {...rest}
      src={`https://img.youtube.com/vi/${src}/mqdefault.jpg`}
    />
  );
};

Trailer.Subtitle = function TrailerSubtitle({ children, ...rest }) {
  return <Subtitle {...rest}>{children}</Subtitle>;
};
