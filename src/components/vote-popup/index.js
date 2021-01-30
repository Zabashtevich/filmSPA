import React from "react";

import {
  Container,
  Wrapper,
  Number,
  Inner,
  VoteStar,
  Highscore,
  Icon,
  Popup,
  Item,
  Star,
  EmptyStar,
} from "./styles/vote-popup";

export default function VotePopup({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

VotePopup.Wrapper = function VotePopupWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

VotePopup.Number = function VotePopupNumber({ children, ...rest }) {
  return <Number {...rest}>{children}</Number>;
};

VotePopup.Inner = function VotePopupInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

VotePopup.VoteStar = function VotePopupVoteStar({ ...rest }) {
  return <VoteStar {...rest} />;
};

VotePopup.Star = function VotePopupStar({ ...rest }) {
  return <Star {...rest} />;
};

VotePopup.EmptyStar = function VotePopupEmptyStar({ ...rest }) {
  return <EmptyStar {...rest} />;
};

VotePopup.Highscore = function VotePopupHighscore({ children, ...rest }) {
  return <Highscore {...rest}>{children}</Highscore>;
};

VotePopup.Icon = function VotePopupIcon({ ...rest }) {
  return <Icon {...rest} />;
};

VotePopup.Popup = function VotePopupPopup({ children, ...rest }) {
  return <Popup {...rest}>{children}</Popup>;
};

VotePopup.Item = function VotePopupItem({ children, ...rest }) {
  return <Item {...rest}>{children}</Item>;
};
