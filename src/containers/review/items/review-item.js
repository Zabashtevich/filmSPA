import React, { useState } from "react";

import { Review } from "../../../components";
import { getCorrectDate, validateAvatarUrl } from "../../../utils";

export default function ReviewItem({ item }) {
  const [buttonVisible, setButtonVisible] = useState(
    item.content.length > 1000,
  );

  const avatar = item?.author_details?.avatar_path;
  const value = item?.author_details?.rating;
  const nickname = item.author_details.name || item.author_details.username;

  return (
    <Review.Item key={item.id} value={value || 5}>
      <Review.Header>
        <Review.Avatar src={validateAvatarUrl(avatar)} />
        <Review.Nickname>{nickname}</Review.Nickname>
        {value && <Review.Value>{value}</Review.Value>}
        <Review.Date>{getCorrectDate(item.created_at)}</Review.Date>
      </Review.Header>
      <Review.Content>
        <Review.Text>
          {buttonVisible &&
            item.content
              .slice(0, 1000)
              .split("\n")
              .map((item, i) =>
                item.includes("http") ? (
                  <Review.Link href={`${item}`} target="_blanc" key={i}>
                    {item}
                  </Review.Link>
                ) : (
                  <Review.Paragraph key={i}>{item}</Review.Paragraph>
                ),
              )}
        </Review.Text>
        {buttonVisible && (
          <Review.All onClick={() => setButtonVisible(false)}>
            WATCH ALL
          </Review.All>
        )}
      </Review.Content>
    </Review.Item>
  );
}
