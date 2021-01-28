import React from "react";

import {
  Container,
  Date,
  Name,
  Number,
  Character,
  Wrapper,
  Star,
  Highscore,
  Vote,
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

RowListItem.Number = function RowListItemNumber({ children, ...rest }) {
  return <Number {...rest}>{children}</Number>;
};

RowListItem.Character = function RowListItemCharacter({ children, ...rest }) {
  return <Character {...rest}>{children}</Character>;
};

RowListItem.Wrapper = function RowListItemWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

RowListItem.Vote = function RowListItemVote({ children, ...rest }) {
  return <Vote {...rest}>{children}</Vote>;
};

RowListItem.Star = function RowListItemStar({ ...rest }) {
  return <Star {...rest} />;
};

RowListItem.Highscore = function RowListItemHighscore({ children, ...rest }) {
  return <Highscore {...rest}>{children}</Highscore>;
};
