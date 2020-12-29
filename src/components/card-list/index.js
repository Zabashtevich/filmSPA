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

CardList.ItemContentWrapper = function CardListItemContentWrapper({
  children,
}) {
  return <ContentWrapper>{children}</ContentWrapper>;
};

CardList.ItemImage = function CardListItemImage({ src }) {
  console.log(src);
  return (
    <ItemImage
      src={src ? baseImageLink + src : imageerror}
      error={src ? null : true}
    />
  );
};

CardList.ItemDescriptionInner = function CardListItemDescriptionInner({
  title,
  date,
}) {
  return (
    <ItemDescriptionInner>
      <ItemTitle>{title}</ItemTitle>
      <ItemDate>{date}</ItemDate>
    </ItemDescriptionInner>
  );
};

CardList.MetaScore = function CardListMetaScore({ children, ...rest }) {
  return <MetaScore {...rest}>{children}</MetaScore>;
};
