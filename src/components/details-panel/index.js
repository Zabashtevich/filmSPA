import React, { useState } from "react";

import { range } from "../../utils/utils";

import {
  Container,
  Wrapper,
  Title,
  Overview,
  Star,
  Rating,
  Inner,
  Votes,
  Average,
  Reviews,
} from "./styles/details-panel";

export default function DetailsPanel({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

DetailsPanel.Wrapper = function DetailsPanelWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

DetailsPanel.Title = function DetailsPanelTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

DetailsPanel.Overview = function DetailsPanelOverview({ children, ...rest }) {
  return <Overview {...rest}>{children}</Overview>;
};

DetailsPanel.Stars = function DetailsPanelStars({
  average,
  children,
  ...rest
}) {
  const [hover, setHover] = useState(null);
  return range(0, 10).map((_, index) => (
    <Star
      {...rest}
      key={index}
      onMouseEnter={() => setHover(index + 1)}
      onMouseLeave={() => setHover(null)}
      hoverActive={index + 1 <= hover && 1}
      rated={average >= index + 1 && 1}
    />
  ));
};

DetailsPanel.Rating = function DetailsPanelRating({ children, ...rest }) {
  return <Rating {...rest}>{children}</Rating>;
};

DetailsPanel.Inner = function DetailsPanelInner({ children, ...rest }) {
  return <Inner {...rest}>{children}</Inner>;
};

DetailsPanel.Votes = function DetailsPanelVotes({ children, ...rest }) {
  return <Votes {...rest}>{children}</Votes>;
};

DetailsPanel.Average = function DetailsPanelAverage({ children, ...rest }) {
  return <Average {...rest}>{children}</Average>;
};

DetailsPanel.Reviews = function DetailsPanelReviews({ children, ...rest }) {
  return <Reviews {...rest}>{children}</Reviews>;
};
