import React from "react";

import {
  Container,
  BackgroundImageWrapper,
  BackgroundImage,
} from "./styles/card-details";

export default function CardDetails({ children }) {
  return <Container>{children}</Container>;
}

CardDetails.BackgroundImage = function CardDetailsBackgroundImage({ src }) {
  return (
    <BackgroundImageWrapper>
      <BackgroundImage src={src} />
    </BackgroundImageWrapper>
  );
};
