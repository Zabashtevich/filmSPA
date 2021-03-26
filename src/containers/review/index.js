import React from "react";

import { Review } from "../../components";

export default function ReviewContainer() {
  return (
    <Review>
      <Review.Item>
        <Review.Header>
          <Review.Avatar />
          <Review.Nickname></Review.Nickname>
          <Review.Value></Review.Value>
          <Review.Date></Review.Date>
          <Review.Star />
        </Review.Header>
        <Review.Body>
          <Review.Content></Review.Content>
          <Review.Load></Review.Load>
        </Review.Body>
      </Review.Item>
    </Review>
  );
}
