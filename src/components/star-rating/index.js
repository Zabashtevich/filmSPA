import React from "react";

import { Container, Inner, Star, Title, Wrapper } from "./styles/star-rating";

export default function StarRating({ children }) {
  return <Container>{children}</Container>;
}

StarRating.Star = function StarRatingStar({
  indexValue,
  starValue,
  setStarValue,
}) {
  return (
    <Inner
      onMouseEnter={() => setStarValue(indexValue)}
      onMouseLeave={() => setStarValue(0)}
    >
      <Star color={starValue >= indexValue ? "color" : null} />
    </Inner>
  );
};

StarRating.Title = function StarRatingTitle({ children }) {
  return <Title>{children}</Title>;
};

StarRating.Wrapper = function StarRatingWrapper({ children }) {
  return <Wrapper>{children}</Wrapper>;
};
