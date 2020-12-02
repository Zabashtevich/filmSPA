import React from "react";
import { backdropImageLink } from "../../constants/constants";

import {
  Container,
  BackgroundImageColor,
  BackgroundImage,
  BackgroundContainer,
  BackgroundWrapper,
} from "./styles/details";

export default function Details({ children }) {
  return <Container>{children}</Container>;
}

Details.BackgroundContainer = function DetailsBackgroundContainer({
  children,
}) {
  return <BackgroundContainer>{children}</BackgroundContainer>;
};

Details.BackgroundImage = function DetailsBackgroundImage({ src }) {
  return (
    <BackgroundWrapper>
      <BackgroundImage src={backdropImageLink + src} />
      <BackgroundImageColor />
    </BackgroundWrapper>
  );
};
