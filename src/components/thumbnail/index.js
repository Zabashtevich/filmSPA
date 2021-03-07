import React from "react";
import { CSSTransition } from "react-transition-group";

import { Container, Gallery, Trailer } from "./styles/thumbnail";

export default function Thumbnail({ visible, children, ...rest }) {
  return (
    <CSSTransition
      in={visible}
      classNames="fade"
      appear={true}
      timeout={500}
      mountOnEnter
    >
      <Container {...rest}>{children}</Container>
    </CSSTransition>
  );
}

Thumbnail.Gallery = function ThumbnailGallery({ ...rest }) {
  return <Gallery {...rest} />;
};

Thumbnail.Trailer = function ThumbnailTrailer({ ...rest }) {
  return <Trailer {...rest} />;
};
