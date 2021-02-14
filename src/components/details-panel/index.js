import React from "react";

import {
  Container,
  Wrapper,
  Title,
  Overview,
  Star,
  Rating,
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

DetailsPanel.Star = function DetailsPanelStar({ children, ...rest }) {
  return <Star {...rest} />;
};

DetailsPanel.Rating = function DetailsPanelRating({ children, ...rest }) {
  return <Rating {...rest}>{children}</Rating>;
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
