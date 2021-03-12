import React from "react";

import { Reviews } from "../../components";
import { getYearFromString } from "../../utils";
import { PaginationContainer } from "./..";

export default function ReviewsContainer({ combineReviews }) {
  const { loading, list } = combineReviews;
  return (
    <Reviews>
      {!loading &&
        list.slice(0, 5).map((item) => {
          return (
            <Reviews.Review key={item.id}>
              <Reviews.Header>
                <Reviews.Avatar src={item.author_details.avatar_path} />
                <Reviews.Nickname>{item.author}</Reviews.Nickname>
                <Reviews.Date>
                  {getYearFromString(item.created_at)}
                </Reviews.Date>
              </Reviews.Header>
              <Reviews.Text>{item.content}</Reviews.Text>
            </Reviews.Review>
          );
        })}
      <PaginationContainer />
    </Reviews>
  );
}
