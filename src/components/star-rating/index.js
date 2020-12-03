import React from "react";

import {
  Container,
  Wrapper,
  LeftFilledStar,
  RightFilledStar,
  LeftEmptyStar,
  RightEmptyStar,
} from "./styles/star-rating";

export default function StarRating({ children }) {
  return <Container>{children}</Container>;
}

StarRating.Star = function StarRatingStar() {
  return (
    <Wrapper>
      <LeftFilledStar />
      <RightFilledStar />
      <LeftEmptyStar />
      <RightEmptyStar />
    </Wrapper>
  );
};
