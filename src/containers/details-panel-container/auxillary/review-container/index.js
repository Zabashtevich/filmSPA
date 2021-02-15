import React, { useState } from "react";
import { Review } from "../../../../components";

export default function ReviewContainer({ item }) {
  const [showMore, setShowMore] = useState({ amount: 500, visible: true });
  console.log(item.time);
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
        {item.text.length > 500 && (
          <Review.Text>
            {item.text.slice(0, showMore.amount) + "..."}
          </Review.Text>
        )}
        {item.text.legth < 500 && <Review.Text>{item.text}</Review.Text>}
        <Review.Show
          onClick={() =>
            setShowMore({ amount: item.text.length, visible: false })
          }
          visible={showMore.visible}
        >
          SHOW MORE
        </Review.Show>
      </Review.Body>
    </Review>
  );
}
