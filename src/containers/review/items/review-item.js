import React, { useState } from "react";

import { Review } from "../../../components";
import { getCorrectDate, validateAvatarUrl } from "../../../utils";

export default function ReviewItem({ item, visible }) {
  const [textIsLimited, setTextIsLimited] = useState(
    item.content.length > 1000,
  );

  const avatar = item?.author_details?.avatar_path;
  const value = item?.author_details?.rating || 5;
  const nickname = item.author_details.name || item.author_details.username;

  return (
    <Review.Item key={item.id} value={value} visible={visible}>
      <Review.Header>
        <Review.Avatar src={validateAvatarUrl(avatar)} />
        <Review.Nickname>{nickname}</Review.Nickname>
        {value && <Review.Value>{value}</Review.Value>}
        <Review.Date>{getCorrectDate(item.created_at)}</Review.Date>
        <Review.Star />
      </Review.Header>
      <Review.Body>
        <Review.Content textlengthdefault={!textIsLimited && 1}>
          {item.content}
        </Review.Content>
        {textIsLimited && (
          <Review.Load onClick={() => setTextIsLimited(false)}>
            Load full review
          </Review.Load>
        )}
      </Review.Body>
    </Review.Item>
  );
}
