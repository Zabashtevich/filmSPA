import React from "react";

import { Container, Gallery, Trailer } from "./styles/thumbnail";

export default function Thumbnail({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

Thumbnail.Gallery = function ThumbnailGallery({ ...rest }) {
  return <Gallery {...rest} />;
};

Thumbnail.Trailer = function ThumbnailTrailer({ ...rest }) {
  return <Trailer {...rest} />;
};
