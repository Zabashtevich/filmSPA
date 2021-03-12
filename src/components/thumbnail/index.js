import React from "react";
import { CSSTransition } from "react-transition-group";

import { Container, Gallery, Trailer, Wrapper } from "./styles/thumbnail";

export default function Thumbnail({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Thumbnail.Wrapper = function ThumbnailWrapper({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="fade"
      appear={true}
      timeout={500}
      mountOnEnter
    >
      <Wrapper {...rest}>{children}</Wrapper>
    </CSSTransition>
  );
};

Thumbnail.Gallery = function ThumbnailGallery({ ...rest }) {
  return <Gallery {...rest} />;
};

Thumbnail.Trailer = function ThumbnailTrailer({ ...rest }) {
  return <Trailer {...rest} />;
};
