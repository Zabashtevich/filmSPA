import React from "react";

import {
  Container,
  Date,
  Name,
  Number,
  Character,
  Wrapper,
  Star,
  EmptyStar,
  Highscore,
  Vote,
  Icon,
  Popup,
  Item,
  Inner,
  PopupNumber,
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

RowListItem.PopupNumber = function RowListItemPopupNumber({
  children,
  ...rest
}) {
  return <PopupNumber {...rest}>{children}</PopupNumber>;
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

RowListItem.EmptyStar = function RowListItemEmptyStar({ ...rest }) {
  return <EmptyStar {...rest} />;
};

RowListItem.Star = function RowListItemStar({ ...rest }) {
  return <Star {...rest} />;
};

RowListItem.Highscore = function RowListItemHighscore({ children, ...rest }) {
  return <Highscore {...rest}>{children}</Highscore>;
};

RowListItem.Icon = function RowListItemIcon({ ...rest }) {
  return <Icon {...rest} />;
};

RowListItem.Popup = function RowListItemPopup({ children, ...rest }) {
  return <Popup {...rest}>{children}</Popup>;
};

RowListItem.Item = function RowListItemItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};

RowListItem.Highscore = function RowListItemHighscore({ children, ...rest }) {
  return <Highscore {...rest}>{children}</Highscore>;
};

RowListItem.Inner = function RowListItemInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};
