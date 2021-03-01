import React from "react";
// import { basePosterLink } from "../../constants/constants";
import imageerror from "../../assets/404-error.svg";
//TODO IMAGE LINK
import { Container, PosterWrapper, Poster } from "./styles/poster-column";

export default function PosterColumn({ children }) {
  return <Container>{children}</Container>;
}

PosterColumn.Poster = function PosterColumnPoster({ src, ...rest }) {
  return (
    <PosterWrapper {...rest}>
      <Poster src={src ? src : imageerror} />
    </PosterWrapper>
  );
};
