import React, { useState } from "react";

import { Review } from "../../../components";
import { getCorrectDate, validateAvatarUrl } from "../../../utils";

export default function ReviewItem({ item }) {
  const [textIsShortened, setTextIsShortened] = useState(
    item.content.length > 1000,
  );

  const avatar = item?.author_details?.avatar_path;
  const value = item?.author_details?.rating;
  const nickname = item.author_details.name || item.author_details.username;

  return (
    <Review.Item key={item.id}>
      <Review.Header>
        <Review.Avatar src={validateAvatarUrl(avatar)} />
        <Review.Nickname>{nickname}</Review.Nickname>
        {value && <Review.Value>{value}</Review.Value>}
        <Review.Date>{getCorrectDate(item.created_at)}</Review.Date>
        <Review.Star />
      </Review.Header>
      <Review.Body>
        <Review.Content>{item.content}</Review.Content>
        <Review.Load>Load full review</Review.Load>
      </Review.Body>
    </Review.Item>
  );
}
