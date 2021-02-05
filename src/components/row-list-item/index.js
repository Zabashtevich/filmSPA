import React from "react";

import {
  Container,
  Date,
  Name,
  Numerator,
  Character,
  Wrapper,
  Star,
  VoteAmount,
  VoteAverage,
  Inner,
} from "./styles/row-list-item";

export default function RowListItem({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

RowListItem.Date = function RowListItemDate({ children, ...rest }) {
  return <Date {...rest}>{children}</Date>;
};

RowListItem.Name = function RowListItemName({ children, ...rest }) {
  return <Name {...rest}>{children}</Name>;
};

RowListItem.Numerator = function RowListItemNumerator({ children, ...rest }) {
  return <Numerator {...rest}>{children}</Numerator>;
};

RowListItem.Character = function RowListItemCharacter({ children, ...rest }) {
  return <Character {...rest}>{children}</Character>;
};

RowListItem.Wrapper = function RowListItemWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

RowListItem.Inner = function RowListItemInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

RowListItem.VoteAmount = function RowListItemVoteAmount({ children, ...rest }) {
  return <VoteAmount {...rest}>{children}</VoteAmount>;
};

RowListItem.VoteAverage = function RowListItemVoteAverage({
  children,
  ...rest
}) {
  return <VoteAverage {...rest}>{children}</VoteAverage>;
};

RowListItem.Star = function RowListItemStar({ ...rest }) {
  return <Star {...rest} />;
};
