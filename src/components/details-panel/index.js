import React, { useState } from "react";

import { range } from "../../utils/utils";

import {
  Container,
  Wrapper,
  Title,
  Overview,
  Star,
  Rating,
  Votes,
  Average,
  UserRating,
  UserTitle,
  UserValue,
  Button,
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

DetailsPanel.Votes = function DetailsPanelVotes({ children, ...rest }) {
  return <Votes {...rest}>{children}</Votes>;
};

DetailsPanel.Average = function DetailsPanelAverage({
  average,
  children,
  ...rest
}) {
  return (
    <Average {...rest} average={average}>
      {children}
    </Average>
  );
};

DetailsPanel.UserRating = function DetailsPanelUserRating({
  children,
  ...rest
}) {
  return <UserRating {...rest}>{children}</UserRating>;
};

DetailsPanel.UserTitle = function DetailsPanelUserTitle({ children, ...rest }) {
  return <UserTitle {...rest}>{children}</UserTitle>;
};

DetailsPanel.UserValue = function DetailsPanelUserValue({ children, ...rest }) {
  return <UserValue {...rest}>{children}</UserValue>;
};

DetailsPanel.Button = function DetailsPanelButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

DetailsPanel.Reviews = function DetailsPanelReviews({ children, ...rest }) {
  return <Reviews {...rest}>{children}</Reviews>;
};
