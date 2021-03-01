import React from "react";
// TODO IMAGE LINK
import {
  Container,
  BackgroundImageColor,
  BackgroundImage,
  BackgroundContainer,
  BackgroundWrapper,
} from "./styles/details-header";

export default function DetailsHeader({ children, background }) {
  return <Container background={background}>{children}</Container>;
}

DetailsHeader.BackgroundContainer = function DetailsHeaderBackgroundContainer({
  children,
}) {
  return <BackgroundContainer>{children}</BackgroundContainer>;
};

DetailsHeader.BackgroundImage = function DetailsHeaderBackgroundImage({ src }) {
  return (
    <BackgroundWrapper>
      <BackgroundImage src={src ? src : null} />
      <BackgroundImageColor />
    </BackgroundWrapper>
  );
};
