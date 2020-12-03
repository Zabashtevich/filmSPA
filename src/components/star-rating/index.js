import React from "react";

import { Container, Wrapper, Star, Title } from "./styles/star-rating";

export default function StarRating({ children }) {
  return <Container>{children}</Container>;
}

StarRating.Star = function StarRatingStar({
  indexValue,
  starValue,
  setStarValue,
}) {
  return (
    <Wrapper
      onMouseEnter={() => setStarValue(indexValue)}
      onMouseLeave={() => setStarValue(0)}
    >
      <Star color={starValue >= indexValue} />
    </Wrapper>
  );
};

StarRating.Title = function StarRatingTitle({ children }) {
  return <Title>{children}</Title>;
};
