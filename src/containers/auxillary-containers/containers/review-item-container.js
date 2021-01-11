import React, { useState, useEffect } from "react";
import { LoadMore, ReviewsList } from "../../../components";

export default function ReviewItemContainer({ correctSrc, item }) {
  const [loadMoreVisible, setLoadMoreVisible] = useState(false);
  const [amountCharacters, setAmountCharacters] = useState(800);

  useEffect(() => {
    if (item.text.length > 800) {
      setLoadMoreVisible(true);
    }
  }, [item.text]);

  return (
    <ReviewsList.ItemContainer
      key={item.nickname}
      backgroundcolor={item.rating}
    >
      <ReviewsList.Author>
        <ReviewsList.Avatar
          src={correctSrc.changed ? null : correctSrc}
          correctSrc={correctSrc.changed ? correctSrc.src : null}
        />
        {item.rating && <ReviewsList.Score>{item.rating}</ReviewsList.Score>}
        <ReviewsList.Wrapper>
          <ReviewsList.Nickname>{item.nickname}</ReviewsList.Nickname>
          <ReviewsList.Date>
            {new Date(item.date).toDateString()}
          </ReviewsList.Date>
        </ReviewsList.Wrapper>
      </ReviewsList.Author>
      {!loadMoreVisible && (
        <ReviewsList.Content>{item.text}</ReviewsList.Content>
      )}
      {loadMoreVisible && (
        <ReviewsList.Content loadMoreVisible={loadMoreVisible}>
          {item.text.slice(0, amountCharacters)}
        </ReviewsList.Content>
      )}
      {loadMoreVisible && (
        <LoadMore>
          <LoadMore.Wrapper>
            <LoadMore.Button
              reviewpage
              onClick={() => {
                setAmountCharacters(item.text.length);
                setLoadMoreVisible(false);
              }}
            >
              Load more
            </LoadMore.Button>
          </LoadMore.Wrapper>
        </LoadMore>
      )}
    </ReviewsList.ItemContainer>
  );
}
