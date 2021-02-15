import React, { useState } from "react";
import { Review } from "../../../../components";

export default function ReviewContainer({ item }) {
  const [showMore, setShowMore] = useState({
    amount: 500,
    visible: item.text.length > 500 ? true : false,
  });
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
        <Review.Text buttonsettings={showMore}>{item.text}</Review.Text>
        <Review.Show
          visible={showMore.visible}
          onClick={() =>
            setShowMore({ amount: item.text.length, visible: false })
          }
        >
          SHOW MORE
        </Review.Show>
      </Review.Body>
    </Review>
  );
}
