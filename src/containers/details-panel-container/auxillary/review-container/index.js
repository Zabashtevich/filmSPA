import React, { useState } from "react";
import { Review } from "../../../../components";

export default function ReviewContainer({ item }) {
  const [showMore, setShowMore] = useState({ amount: 500, visible: true });
  return (
    <Review rating={item.rating}>
      <Review.Header>
        <Review.Profile>
          <Review.Avatar src={item.avatar} />
          <Review.Nickname>{item.nickname}</Review.Nickname>
          {item.rating && <Review.Rating>{item.rating}</Review.Rating>}
        </Review.Profile>
        <Review.Time>{item.time}</Review.Time>
      </Review.Header>
      <Review.Body>
        <Review.Text>{item.text}</Review.Text>
        <Review.Show visible={showMore.visible}>SHOW MORE</Review.Show>
      </Review.Body>
    </Review>
  );
}
