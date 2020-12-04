import React from "react";

import {
  ItemContainer,
  Container,
  Miniature,
  Name,
} from "./styles/recomendation-list";

export default function RecommendationsList({ children }) {
  return <Container>{children}</Container>;
}

RecommendationsList.ItemContainer = function RecommendationsListItemContainer({
  children,
}) {
  return <ItemContainer>{children}</ItemContainer>;
};

RecommendationsList.Miniature = function RecommendationsListMiniature({ src }) {
  return <Miniature src={src} />;
};

RecommendationsList.Name = function RecommendationsListName({ children }) {
  return <Name>{children}</Name>;
};
