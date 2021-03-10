import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Credits } from "../../components";
import { getYearFromString, range } from "../../utils";

export default function CreditsContainer({ list, dataLoading }) {
  const { loading, ratedMovies } = useSelector((state) => state.userData);

  const [selectValue, setSelectValue] = useState("All");

  return (
    <Credits>
      <Credits.Header>
        <Credits.Title>Filmography</Credits.Title>
        <Credits.Select>
          <Credits.Value>{selectValue}</Credits.Value>
          <Credits.Arrow />
          <Credits.Wrapper>
            {["All", "TV shows", "Movies"]
              .filter((item) => item !== selectValue)
              .map((item) => (
                <Credits.Option key={item} onClick={() => setSelectValue(item)}>
                  {item}
                </Credits.Option>
              ))}
          </Credits.Wrapper>
        </Credits.Select>
      </Credits.Header>
      <Credits.List>
        {!loading &&
          !dataLoading &&
          list.map((item) => (
            <CreditsItem key={item.id} item={item} ratedMovies={ratedMovies} />
          ))}
      </Credits.List>
    </Credits>
  );
}

function CreditsItem({ item, ratedMovies }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const metaVisible = !!item.vote_average && !!item.vote_count;
  const movieIsRated = ratedMovies.find((movie) => +movie.id === item.id);

  useEffect(() => {
    if (movieIsRated) {
    }
  }, []);

  return (
    <Credits.Item>
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
          <Credits.Average>{item.vote_average}</Credits.Average>
          <Credits.Count>{item.vote_count}</Credits.Count>
        </Credits.Meta>
      )}
      {movieIsRated && (
        <Credits.Highscore>{movieIsRated.value}</Credits.Highscore>
      )}
      <Credits.Rating onClick={() => setPopupVisible((prev) => !prev)}>
        <Credits.Star />
        <Credits.Popup>
          <Credits.Close />
          {range(1, 10).map((item) => (
            <Credits.Star key={item} />
          ))}
        </Credits.Popup>
      </Credits.Rating>
    </Credits.Item>
  );
}
