import React from "react";

import {
  Container,
  ItemContainer,
  ContentWrapper,
  ItemImage,
  ItemTitle,
  ItemDate,
  DataWrapper,
  VoteAverage,
  VoteCount,
} from "./styles/card-list";

export default function CardList({ movieList, children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

CardList.ItemContainer = function CardListItemContainer({ children, ...rest }) {
  return <ItemContainer {...rest}>{children}</ItemContainer>;
};

CardList.ItemContent = function CardListItemContent({ ...rest }) {
  return (
    <ContentWrapper {...rest}>
      <ItemImage />
      <ItemTitle></ItemTitle>
      <ItemDate></ItemDate>
    </ContentWrapper>
  );
};

CardList.MetaData = function CardListMetaData({ ...rest }) {
  return (
    <DataWrapper {...rest}>
      <VoteAverage />
      <VoteCount />
    </DataWrapper>
  );
};
