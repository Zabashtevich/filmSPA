import React from "react";

import {
  Container,
  Title,
  Subtitle,
  SubtitleValue,
  RowContainer,
} from "./styles/actor-poster-description";

export default function ActorPosterDescription({ children }) {
  return <Container>{children}</Container>;
}

ActorPosterDescription.Title = function ActorPosterDescriptionTitle({
  children,
}) {
  return <Title>{children}</Title>;
};

ActorPosterDescription.Subtitle = function ActorPosterDescriptionSubtitle({
  children,
}) {
  return <Subtitle>{children}</Subtitle>;
};

ActorPosterDescription.SubtitleValue = function ActorPosterDescriptionSubtitleValue({
  children,
}) {
  return <SubtitleValue>{children}</SubtitleValue>;
};

ActorPosterDescription.RowContainer = function ActorPosterDescriptionRowContainer({
  children,
}) {
  return <RowContainer>{children}</RowContainer>;
};
