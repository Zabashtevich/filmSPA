import React from "react";
import { LoadMore, ReviewsList } from "../../../components";

export default function ReviewItemContainer({ correctSrc, item }) {
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
      <ReviewsList.Content>{item.text}</ReviewsList.Content>
      <LoadMore>
        <LoadMore.Wrapper>
          <LoadMore.Button>Load more</LoadMore.Button>
        </LoadMore.Wrapper>
      </LoadMore>
    </ReviewsList.ItemContainer>
  );
}
