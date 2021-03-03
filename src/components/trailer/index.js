import React from "react";
import { CSSTransition } from "react-transition-group";

import {
  Face,
  Icon,
  Backdrop,
  Content,
  Videoplayer,
  Thumbnail,
  Wrapper,
  Poster,
  Info,
  Title,
  Year,
  Description,
  Metainfo,
  Average,
  Count,
  Else,
  Item,
  Container,
} from "./styles/trailer";

export default function Trailer({ children, ...rest }) {
  return <Face {...rest}>{children}</Face>;
}

Trailer.Icon = function TrailerIcon({ ...rest }) {
  return <Icon {...rest} />;
};

Trailer.Thumbnail = function TrailerThumbnail({ ...rest }) {
  return <Thumbnail {...rest} />;
};

Trailer.Backdrop = function TrailerBackdrop({ visible, children, ...rest }) {
  return (
    <CSSTransition
      classNames="fade"
      in={visible}
      unmountOnExit
      mountOnEnter
      timeout={500}
      appear={true}
    >
      <Backdrop {...rest}>{children}</Backdrop>
    </CSSTransition>
  );
};

Trailer.Content = function TrailerContent({ children, ...rest }) {
  return <Content {...rest}>{children}</Content>;
};

Trailer.Videoplayer = function TrailerVideoplayer({ ...rest }) {
  return <Videoplayer {...rest} />;
};

Trailer.Wrapper = function TrailerWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Trailer.Poster = function TrailerPoster({ ...rest }) {
  return <Poster {...rest} />;
};

Trailer.Info = function TrailerInfo({ children, ...rest }) {
  return <Info {...rest}>{children}</Info>;
};

Trailer.Title = function TrailerTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

Trailer.Year = function TrailerYear({ children, ...rest }) {
  return <Year {...rest}>{children}</Year>;
};

Trailer.Description = function TrailerDescription({ children, ...rest }) {
  return <Description {...rest}>{children}</Description>;
};

Trailer.Metainfo = function TrailerMetainfo({ children, ...rest }) {
  return <Metainfo {...rest}>{children}</Metainfo>;
};

Trailer.Average = function TrailerAverage({ children, ...rest }) {
  return <Average {...rest}>{children}</Average>;
};

Trailer.Count = function TrailerCount({ children, ...rest }) {
  return <Count {...rest}>{children}</Count>;
};

Trailer.Else = function TrailerElse({ children, ...rest }) {
  return <Else {...rest}>{children}</Else>;
};

Trailer.Container = function TrailerContainer({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
};

Trailer.Item = function TrailerBackdrop({ ...rest }) {
  return <Item {...rest} />;
};
