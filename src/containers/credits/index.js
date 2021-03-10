import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Credits } from "../../components";
import { getYearFromString, range, sortMoviesByDate } from "../../utils";

export default function CreditsContainer({ list, dataLoading }) {
  const { loading, ratedMovies } = useSelector((state) => state.userData);

  const [{ value, visible }, setSelect] = useState({
    value: "All",
    visible: false,
  });

  return (
    <Credits>
      <Credits.Header>
        <Credits.Title>Filmography</Credits.Title>
        <Credits.Select
          onClick={() => setSelect((prev) => ({ ...prev, visible: !visible }))}
        >
          <Credits.Value>{value}</Credits.Value>
          <Credits.Arrow rotate={visible ? 1 : 0} />
          <Credits.Wrapper visible={visible}>
            {["All", "TV shows", "Movies"]
              .filter((item) => item !== value)
              .map((item) => (
                <Credits.Option
                  key={item}
                  onClick={(e) => {
                    e.preventDefault();
                    setSelect((prev) => ({ ...prev, value: item }));
                  }}
                >
                  {item}
                </Credits.Option>
              ))}
          </Credits.Wrapper>
        </Credits.Select>
      </Credits.Header>
      <Credits.List>
        {!loading &&
          !dataLoading &&
          sortMoviesByDate(list).map((item) => (
            <CreditsItem key={item.id} item={item} ratedMovies={ratedMovies} />
          ))}
      </Credits.List>
    </Credits>
  );
}

function CreditsItem({ item, ratedMovies }) {
  const [popupVisible, setPopupVisible] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(0);
  const metaVisible = !!item.vote_average && !!item.vote_count;
  const movieIsRated = ratedMovies.find((movie) => +movie.id === item.id);
  const yeardisabled = item.release_date === "" || item.first_air_date === "";
  console.log(yeardisabled);

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
        <Credits.Rating onClick={() => setPopupVisible((prev) => !prev)}>
          <Credits.Star />
          <Credits.Popup visible={popupVisible}>
            <Credits.Close />
            {range(1, 10).map((item) => (
              <Credits.Star
                key={item}
                onMouseEnter={() => setHoverIndex(item)}
                onMouseLeave={() => setHoverIndex(0)}
                active={hoverIndex >= item ? 1 : 0}
              />
            ))}
          </Credits.Popup>
        </Credits.Rating>
      )}
    </Credits.Item>
  );
}
