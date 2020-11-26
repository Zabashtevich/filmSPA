import React from "react";
import { baseImageLink } from "../../constants/constants";

import {
  Container,
  ItemContainer,
  ContentWrapper,
  ItemImage,
  ItemTitle,
  ItemDate,
  VoteAverage,
  VoteCount,
  ItemDescriptionInner,
} from "./styles/card-list";

export default function CardList({ movieList, children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

CardList.ItemContainer = function CardListItemContainer({ children, ...rest }) {
  return <ItemContainer {...rest}>{children}</ItemContainer>;
};

CardList.ItemContent = function CardListItemContent({
  src,
  title,
  date,
  voteAverage,
  voteCount,
}) {
  return (
    <ContentWrapper>
      <ItemImage src={baseImageLink + src} />
      <ItemDescriptionInner>
        <ItemTitle>{title}</ItemTitle>
        <ItemDate>{date}</ItemDate>
        <VoteAverage>Vote average:&nbsp; {voteAverage}</VoteAverage>
        <VoteCount>Vote count: &nbsp; {voteCount}</VoteCount>
      </ItemDescriptionInner>
    </ContentWrapper>
  );
};
