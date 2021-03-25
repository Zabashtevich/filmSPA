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
  const charactersAmount = textIsShortened ? 1000 : item.content.length;

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
          {item.content
            .slice(0, charactersAmount)
            .split("\n")
            .map((item, index, array) => {
              const lastParagraph = array.length - 1 === index;
              const link = item.includes("http");
              return (
                <>
                  {link && (
                    <Review.Link href={`${item}`} key={index}>
                      {item}
                    </Review.Link>
                  )}
                  {!link && !lastParagraph && (
                    <Review.Paragraph key={index}>{item}</Review.Paragraph>
                  )}
                  {!link && textIsShortened && lastParagraph && (
                    <Review.Paragraph
                      key={index}
                    >{`${item}...`}</Review.Paragraph>
                  )}
                </>
              );
            })}
        </Review.Text>
        {textIsShortened && (
          <Review.All onClick={() => setTextIsShortened(false)}>
            WATCH ALL
          </Review.All>
        )}
      </Review.Content>
    </Review.Item>
  );
}
