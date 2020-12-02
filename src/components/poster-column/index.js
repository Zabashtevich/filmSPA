import React from "react";

import { Container, PosterWrapper, Poster } from "styles/poster-column";

export default function PosterColumn({ children }) {
  return <Container>{children}</Container>;
}

PosterColumn.Poster = function PosterColumnPoster({ src, ...rest }) {
  return (
    <PosterWrapper {...rest}>
      <Poster src={src} />
    </PosterWrapper>
  );
};
