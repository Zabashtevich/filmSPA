import React, { useEffect, useState } from "react";
import { Credits } from "../../../components";
import { checkMovieInList, getYearFromString, range } from "../../../utils";

export default function CreditsItem({ item, votes }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(0);
  const [rated, setRated] = useState(null);

  useEffect(() => {
    setRated(checkMovieInList(votes, item.id)?.value || null);
  }, [votes]);

  const metaVisible = !!item.vote_average && !!item.vote_count;
  return (
    <Credits.Item>
      <Credits.Year>
        {getYearFromString(item.release_date || item.first_air_date) || "-"}
      </Credits.Year>
      <Credits.Title title={item.name || item.title}>
        {item.name || item.title}
      </Credits.Title>
      <Credits.Meta>
        {metaVisible && (
          <Credits.Average value={item.vote_average}>
            {item.vote_average}
          </Credits.Average>
        )}
        {metaVisible && <Credits.Count>{item.vote_count}</Credits.Count>}
      </Credits.Meta>
      {rated && <Credits.Highscore>{rated}</Credits.Highscore>}
      <Credits.Rating onClick={() => setPopupVisible((prev) => !prev)}>
        <Credits.Star />
        <Credits.Container visible={popupVisible}>
          <Credits.Close />
          {range(1, 10).map((item) => (
            <Credits.Star
              key={item}
              onMouseEnter={() => setHoverIndex(item)}
              onMouseLeave={() => setHoverIndex(0)}
              hovered={hoverIndex >= item && 1}
            />
          ))}
        </Credits.Container>
      </Credits.Rating>
    </Credits.Item>
  );
}
