import React from "react";
import { baseImageLink } from "../../constants/constants";

import {
  ItemContainer,
  Container,
  Miniature,
  Name,
  Title,
  ListContainer,
  Wrapper,
  Score,
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
  return <Miniature src={baseImageLink + src} />;
};

RecommendationsList.Name = function RecommendationsListName({ children }) {
  return <Name>{children}</Name>;
};

RecommendationsList.Title = function RecommendationsListTitle({ children }) {
  return <Title>{children}</Title>;
};

RecommendationsList.ListContainer = function RecommendationsListContainer({
  children,
}) {
  return <ListContainer>{children}</ListContainer>;
};

RecommendationsList.VoteScore = function RecommendationsVoteScore({
  children,
}) {
  return (
    <Wrapper>
      <Score>{children}</Score>
    </Wrapper>
  );
};
