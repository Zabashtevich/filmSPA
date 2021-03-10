import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { Credits } from "../../components";
import { CreditsCompSkeleton } from "../../components/skeleton";
import {
  range,
  sortMoviesByDate,
  splitByType,
  splitDate,
  createEstimateItem,
} from "../../utils";
import { useEstimate } from "./../../hooks";

export default function CreditsContainer({ list, listLoading }) {
  const [{ value, visible }, setPopup] = useState({
    value: "All",
    visible: false,
  });
  const [array, setArray] = useState(null);
  const { loading, ratedMovies } = useSelector((state) => state.userData);

  function popupToggler(value) {
    if (value === "All") {
      setArray(list);
    } else if (value === "TV shows") {
      setArray(splitByType(list).tv);
    } else if (value === "Movies") {
      setArray(splitByType(list).movie);
    }
    setPopup({ value, visible: false });
  }

  useEffect(() => {
    if (!listLoading) {
      setArray(list);
    }
  }, [list]);

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
            {["All", "TV shows", "Movies"]
              .filter((item) => item !== value)
              .map((item) => (
                <Credits.Value key={item} onClick={() => popupToggler(item)}>
                  {item}
                </Credits.Value>
              ))}
          </Credits.Popup>
        </Credits.Select>
      </Credits.Header>
      <Credits.List>
        <CreditsCompSkeleton visible={listLoading} />
        {!loading &&
          !listLoading &&
          sortMoviesByDate(array)
            .slice(0, 10)
            .map((item) => (
              <CreditItem key={item.id} item={item} ratedMovies={ratedMovies} />
            ))}
      </Credits.List>
    </Credits>
  );
}

function CreditItem({ item, ratedMovies }) {
  const [setProps] = useEstimate();
  const [ratingVisible, setRatingVisible] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(0);

  const isRated = ratedMovies.find((movie) => +movie.id === +item.id);
  const released = !!item.release_date || !!item.first_air_date;

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
      {isRated && <Credits.Vote>{isRated.value}</Credits.Vote>}
      {!!released && (
        <Credits.Widget onClick={() => setRatingVisible((prev) => !prev)}>
          <Credits.Rating visible={ratingVisible}>
            <Credits.Close />
            {range(1, 10).map((index) => (
              <Credits.Star
                key={index}
                active={hoverIndex >= index ? 1 : 0}
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex(0)}
                onClick={() =>
                  setProps({
                    type: "rate",
                    value: createEstimateItem(item, index),
                  })
                }
              />
            ))}
          </Credits.Rating>
          <Credits.Star />
        </Credits.Widget>
      )}
    </Credits.Item>
  );
}
