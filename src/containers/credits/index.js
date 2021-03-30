import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import { PaginContainer } from "./../";
import { useCreditsContext, usePaginContext } from "./../../context";
import { Credits } from "./../../components";
import {
  checkMovieInList,
  checkReleaseStatus,
  getYearFromString,
  range,
} from "../../utils";

export default function CreditsContainer() {
  const [{ active }, setPaginProps] = usePaginContext();
  const [{ array, loading }] = useCreditsContext();
  const { userDataLoading } = useSelector((state) => state.userData);

  useEffect(() => {
    if (!loading) {
      setPaginProps((prev) => ({
        ...prev,
        amount: Math.ceil(array.length / 50),
        loading: false,
      }));
    }
  }, [loading, array]);

  return (
    <Credits>
      {!loading &&
        !userDataLoading &&
        array.slice(active * 50 - 50, active * 50).map((item, index) => {
          return <CreditsItem key={item.id} item={item} index={index} />;
        })}
      <PaginContainer />
    </Credits>
  );
}

function CreditsItem({ item, index }) {
  const { userlists, ratedMovies } = useSelector((state) => state.userData);
  const [ratingVisible, setRatingVisible] = useState(false);
  const [widgetVisible, setWidgetVisible] = useState(false);

  const [value, setValue] = useState(null);
  const [hoverIndex, setHoverIndex] = useState(0);

  const metaVisible = !!item.vote_count && !!item.vote_average;
  const buttonsVisible = checkReleaseStatus(
    item.release_date ?? item.first_air_date,
  );

  useEffect(() => {
    if (checkMovieInList(ratedMovies, item.id)) {
      setValue(checkMovieInList(ratedMovies, item.id).value);
    }
  }, [ratedMovies, item]);

  return (
    <Credits.Item>
      <Credits.Number>{index + 1}</Credits.Number>
      <Credits.Year>
        {getYearFromString(item.release_date || item.first_air_date) || "-"}
      </Credits.Year>
      <Credits.Title to={`/details/${item.type}/${item.id}`}>
        {item.title || item.name}
      </Credits.Title>
      <Credits.Meta hidden={!metaVisible && 1}>
        <Credits.Average value={item.vote_average}>
          {item.vote_average}
        </Credits.Average>
        <Credits.Amount>{item.vote_count}</Credits.Amount>
      </Credits.Meta>
      {value && <Credits.Value value={value}>{value}</Credits.Value>}
      <Credits.Wrapper visible={buttonsVisible}>
        <Credits.Rating onClick={() => setRatingVisible((prev) => !prev)}>
          <Credits.Star />
          <Credits.Popup visible={ratingVisible} type="rating">
            <Credits.Close />
            {range(1, 10).map((item) => (
              <Credits.Star
                key={item}
                onMouseEnter={() => setHoverIndex(item)}
                onMouseLeave={() => setHoverIndex(0)}
                selected={hoverIndex >= item && 1}
              />
            ))}
          </Credits.Popup>
        </Credits.Rating>
        <Credits.Widget onClick={() => setWidgetVisible((prev) => !prev)}>
          <Credits.Arrow />
          <Credits.Popup visible={widgetVisible} type="widget">
            <Credits.Name>add to list</Credits.Name>
            <Credits.Favorite>Favorite</Credits.Favorite>
            <Credits.Subtitle>your lists:</Credits.Subtitle>
            {userlists.map((item) => (
              <Credits.Userlist key={item.id}>{item.name}</Credits.Userlist>
            ))}
          </Credits.Popup>
        </Credits.Widget>
      </Credits.Wrapper>
    </Credits.Item>
  );
}
