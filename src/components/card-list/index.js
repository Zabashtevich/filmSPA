import React from "react";
import { baseImageLink } from "../../constants/constants";
import imageerror from "../../assets/404-error.svg";

import {
  Container,
  ItemContainer,
  ContentWrapper,
  ItemImage,
  ItemTitle,
  ItemDate,
  MetaScore,
  ItemDescriptionInner,
} from "./styles/card-list";

export default function CardList({ movieList, children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

CardList.ItemContainer = function CardListItemContainer({ children, ...rest }) {
  return <ItemContainer {...rest}>{children}</ItemContainer>;
};

CardList.ItemContent = function CardListItemContent({ src, title, date }) {
  return (
    <ContentWrapper>
      <ItemImage
        src={src ? baseImageLink + src : imageerror}
        error={src ? null : true}
      />
      <ItemDescriptionInner>
        <ItemTitle>{title}</ItemTitle>
        <ItemDate>{date}</ItemDate>
      </ItemDescriptionInner>
    </ContentWrapper>
  );
};

CardList.MetaScore = function CardListMetaScore({ children, ...rest }) {
  return <MetaScore {...rest}>{children}</MetaScore>;
};
