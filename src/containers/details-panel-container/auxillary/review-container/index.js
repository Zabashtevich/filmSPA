import React from "react";
import { Review } from "../../../../components";

export default function ReviewContainer({ item }) {
  return (
    <Review>
      <Review.Header>
        <Review.Profile>
          <Review.Avatar src={item.avatar} />
          <Review.Nickname>{item.nickname}</Review.Nickname>
        </Review.Profile>
        <Review.Time>{item.time}</Review.Time>
      </Review.Header>
      <Review.Body>
        {item.text.length > 300 && (
          <Review.Text>{item.text.slice(0, 300) + "..."}</Review.Text>
        )}
        {item.text.legth < 300 && <Review.Text>{item.text}</Review.Text>}
        <Review.Show>SHOW MORE</Review.Show>
      </Review.Body>
    </Review>
  );
}
