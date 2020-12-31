import React from "react";

import { Container, Inner, Star, Title, Wrapper } from "./styles/star-rating";

export default function StarRating({ children, ...rest }) {
  return <Container {...rest}>{children}</Container>;
}

StarRating.Star = function StarRatingStar({
  indexValue,
  starValue,
  setStarValue,
  ratedValue,
  ...rest
}) {
  return (
    <Inner
      onMouseEnter={() => setStarValue(indexValue)}
      onMouseLeave={() => setStarValue(0)}
      {...rest}
    >
      <Star
        hovercolor={starValue >= indexValue ? "color" : null}
        ratedcolor={ratedValue >= indexValue ? "color" : null}
      />
    </Inner>
  );
};

StarRating.Title = function StarRatingTitle({ children, ...rest }) {
  return <Title {...rest}>{children}</Title>;
};

StarRating.Wrapper = function StarRatingWrapper({ children, ...rest }) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};
