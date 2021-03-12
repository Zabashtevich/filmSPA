import React from "react";

import { Reviews } from "../../components";
import { PaginationContainer } from "./..";

export default function ReviewsContainer({ list }) {
  return (
    <Reviews>
      {list.map((item) => (
        <Reviews.Review key={item.id}>
          <Reviews.Header>
            <Reviews.Avatar></Reviews.Avatar>
            <Reviews.Nickname></Reviews.Nickname>
            <Reviews.Date></Reviews.Date>
          </Reviews.Header>
          <Reviews.Text></Reviews.Text>
          <PaginationContainer />
        </Reviews.Review>
      ))}
    </Reviews>
  );
}
