import React, { useState } from "react";

import { Credits } from "../../../components";
import { useProcessContext } from "../../../context";
import { useEstimate } from "../../../hooks";
import { createEstimateItem, getYearFromString, range } from "../../../utils";

export default function CreditsItem({ item, ratedMovies, visible }) {
  const [setEstimate] = useEstimate();
  const [{ estimateProcess }] = useProcessContext();
  const [popupVisible, setPopupVisible] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(0);

  const metaVisible = !!item.vote_average && !!item.vote_count;
  const movieIsRated = ratedMovies.find((movie) => +movie.id === item.id);
  const yeardisabled = item.release_date === "" || item.first_air_date === "";

  return (
    <Credits.Item
      to={`/details/${item.media_type}/${item.id}`}
      visible={visible}
    >
      <Credits.Year>
        {getYearFromString(item.release_date || item.first_air_date) || "-"}
      </Credits.Year>
      <Credits.Icon />
      <Credits.Description>
        <Credits.Name>
          {item.orinal_title || item.title || item.name}
        </Credits.Name>
        <Credits.Role>{item.character || "unknown"}</Credits.Role>
      </Credits.Description>
      {metaVisible && (
        <Credits.Meta>
          <Credits.Average value={+item.vote_average}>
            {item.vote_average}
          </Credits.Average>
          <Credits.Count>{item.vote_count}</Credits.Count>
        </Credits.Meta>
      )}
      {movieIsRated && (
        <Credits.Highscore>{movieIsRated.value}</Credits.Highscore>
      )}
      {!yeardisabled && (
        <Credits.Rating
          onClick={() => setPopupVisible((prev) => !prev)}
          disabled={estimateProcess ? 1 : 0}
        >
          <Credits.Star />
          <Credits.Popup visible={popupVisible}>
            <Credits.Close />
            {range(1, 10).map((index) => (
              <Credits.Star
                key={index}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(0)}
                active={hoverIndex >= index ? 1 : 0}
                onClick={() =>
                  setEstimate({
                    type: "rate",
                    value: createEstimateItem(item, index),
                  })
                }
              />
            ))}
          </Credits.Popup>
        </Credits.Rating>
      )}
    </Credits.Item>
  );
}
