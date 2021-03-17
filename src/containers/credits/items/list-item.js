import React, { useState } from "react";
import { useSelector } from "react-redux";

import { Credits } from "../../../components";
import { checkMovieInList, getYearFromString, range } from "../../../utils";

export default function CreditsListItem({ item }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const { ratedMovies } = useSelector((state) => state.userData);

  const title = item.name || item.title;
  const meta = !!item.vote_average || !!item.vote_count;
  const movieIsRated = checkMovieInList(ratedMovies, item.id);

  return (
    <Credits.Item>
      <Credits.Year>
        {getYearFromString(item.release_date || item.first_air_date) || "-"}
      </Credits.Year>
      <Credits.Icon />
      <Credits.Info>
        <Credits.Subtitle title={title}>
          {title.length > 25 ? title.slice(0, 25) + "..." : title}
        </Credits.Subtitle>
        {!!item.character && <Credits.Role>{item.character}</Credits.Role>}
      </Credits.Info>
      {meta && (
        <Credits.Meta>
          <Credits.Average value={item.vote_average}>
            {item.vote_average}
          </Credits.Average>
          <Credits.Amount>{item.vote_count}</Credits.Amount>
        </Credits.Meta>
      )}
      {movieIsRated && (
        <Credits.Uservalue>{movieIsRated.value}</Credits.Uservalue>
      )}
      <Credits.Wrapper onClick={() => setPopupVisible((prev) => !prev)}>
        <Credits.Star />
        <Credits.Popup visible={popupVisible}>
          <Credits.Close />
          {range(1, 10).map((item) => (
            <Credits.Star key={item} />
          ))}
        </Credits.Popup>
      </Credits.Wrapper>
    </Credits.Item>
  );
}
