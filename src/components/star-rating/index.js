import React from "react";

import { Container, Wrapper, Star } from "./styles/star-rating";

export default function StarRating({ children, innerWidth }) {
  return <Container innerWidth={innerWidth}>{children}</Container>;
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
