import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router";

import { Credits } from "../../components";
import { CreditsSelect } from "../../constants/constants";
import { sortMoviesByDate, splitByType, splitDate } from "../../utils";

export default function CreditsContainer({ list }) {
  const [{ value, visible }, setPopup] = useState({
    value: "All",
    visible: false,
  });
  const [array, setArray] = useState(null);

  useEffect(() => {
    if (value === "All") {
      setArray(list);
    } else if (value === "TV shows") {
      setArray(splitByType(list).tv);
    } else if (value === "Movies") {
      setArray(splitByType(list).movie);
    }
  }, [value]);

  return (
    <Credits>
      <Credits.Header>
        <Credits.Title>Filmography</Credits.Title>
        <Credits.Select
          onClick={() => setPopup((prev) => ({ ...prev, visible: !visible }))}
        >
          {value}
          <Credits.Arrow rotate={visible ? 1 : 0} />
          <Credits.Popup visible={visible}>
            {CreditsSelect.filter((item) => item.value !== value).map(
              ({ id, value }) => (
                <Credits.Value
                  key={id}
                  onClick={() => setPopup({ value, visible: false })}
                >
                  {value}
                </Credits.Value>
              ),
            )}
          </Credits.Popup>
        </Credits.Select>
      </Credits.Header>
      <Credits.List>
        {!!array &&
          sortMoviesByDate(array).map((item) => (
            <CreditItem key={item.id} item={item} />
          ))}
      </Credits.List>
    </Credits>
  );
}

function CreditItem({ item }) {
  const { ratedMovies } = useSelector((state) => state.userData);
  const { slug } = useParams();

  const isRated = ratedMovies.find((item) => +item.id === +slug);

  return (
    <Credits.Item>
      <Credits.Year>
        {splitDate(item.first_air_date || item.release_date) || "-"}
      </Credits.Year>
      <Credits.Icon />
      <Credits.Wrapper>
        <Credits.Subtitle>
          {item.title || item.name || item.orinal_title || "unknown"}
        </Credits.Subtitle>
        <Credits.Role>{item.character}</Credits.Role>
      </Credits.Wrapper>
      <Credits.Meta>
        {!!item.vote_average && (
          <Credits.Average value={item.vote_average}>
            {item.vote_average}
          </Credits.Average>
        )}
        {!!item.vote_count && (
          <Credits.Amount>{item.vote_count}</Credits.Amount>
        )}
      </Credits.Meta>
      {isRated && <Credits.Rating>{isRated.value}</Credits.Rating>}
      <Credits.Button>
        <Credits.Arrow />
      </Credits.Button>
    </Credits.Item>
  );
}
