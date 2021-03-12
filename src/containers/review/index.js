import React from "react";

import { Review } from "../../components";
import { getCorrectDate } from "../../utils";
import { PaginationContainer } from "..";

export default function ReviewContainer({ item }) {
  const avatar = item.author_details.avatar_path;
  const value = item.author_details.rating || null;
  return (
    <>
      <Review>
        <Review.Header>
          {avatar && <Review.Avatar src={avatar} />}
          {!avatar && <Review.Placeholder />}
          <Review.Nickname>{item.author}</Review.Nickname>
          {value && <Review.Value value={value}>{value}</Review.Value>}
          <Review.Date>{getCorrectDate(item.created_at)}</Review.Date>
        </Review.Header>
        <Review.Text>{item.content}</Review.Text>
      </Review>
      <PaginationContainer />
    </>
  );
}
