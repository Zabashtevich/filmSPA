import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

import { range } from "../../utils";

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
  UserWrapper,
  UserTitle,
  UserValue,
  Time,
  Button,
  Reviews,
  CreateReview,
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
  handleEstimate,
  children,
  ...rest
}) {
  const [hover, setHover] = useState(null);
  return range(1, 10).map((item) => (
    <Star
      {...rest}
      key={item}
      onMouseEnter={() => setHover(item)}
      onMouseLeave={() => setHover(null)}
      rated={average >= item ? 1 : 0}
      hoveractive={hover >= item ? 1 : 0}
      onClick={() => handleEstimate(item)}
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
  visible,
  children,
  ...rest
}) {
  return (
    <CSSTransition
      appear={true}
      mountOnEnter
      unmountOnExit
      classNames="opacity"
      timeout={{ enter: 500, exit: 500, appear: 500 }}
      in={visible}
    >
      <UserRating {...rest}>{children}</UserRating>
    </CSSTransition>
  );
};

DetailsPanel.UserWrapper = function DetailsPanelUserWrapper({
  children,
  ...rest
}) {
  return <UserWrapper {...rest}>{children}</UserWrapper>;
};

DetailsPanel.UserTitle = function DetailsPanelUserTitle({ children, ...rest }) {
  return <UserTitle {...rest}>{children}</UserTitle>;
};

DetailsPanel.UserValue = function DetailsPanelUserValue({ children, ...rest }) {
  return <UserValue {...rest}>{children}</UserValue>;
};

DetailsPanel.Time = function DetailsPanelTime({ children, ...rest }) {
  return <Time {...rest}>{children}</Time>;
};

DetailsPanel.Button = function DetailsPanelButton({ children, ...rest }) {
  return <Button {...rest}>{children}</Button>;
};

DetailsPanel.Reviews = function DetailsPanelReviews({ children, ...rest }) {
  return <Reviews {...rest}>{children}</Reviews>;
};

DetailsPanel.CreateReview = function DetailsPanelCreateReview({
  children,
  ...rest
}) {
  return <CreateReview {...rest}>{children}</CreateReview>;
};
