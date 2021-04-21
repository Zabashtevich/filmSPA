import React from "react";

import { Popular } from "../../../components";
import { getYearFromString } from "../../../utils";

export default function PopularItem({ item, direction }) {
  return (
    <Popular.Item to={`/details/${direction}/${item.id}`}>
      <Popular.Poster slug={item.poster_path || item.profile_path} />
      <Popular.Description>
        <Popular.Row>
          <Popular.Title>{item.title || item.name}</Popular.Title>
          <Popular.Average value={item.vote_average}>
            {item.vote_average}
          </Popular.Average>
        </Popular.Row>
        <Popular.Row>
          <Popular.Year>{getYearFromString(item.release_date)}</Popular.Year>
          <Popular.Count>{item.vote_count}</Popular.Count>
        </Popular.Row>
      </Popular.Description>
    </Popular.Item>
  );
}
