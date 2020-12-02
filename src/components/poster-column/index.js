import React from "react";
import { basePosterLink } from "../../constants/constants";

import { Container, PosterWrapper, Poster } from "./styles/poster-column";

export default function PosterColumn({ children }) {
  return <Container>{children}</Container>;
}

PosterColumn.Poster = function PosterColumnPoster({ src }) {
  return (
    <PosterWrapper>
      <Poster src={basePosterLink + src} />
    </PosterWrapper>
  );
};
