import React, { useState } from "react";
import { useSelector } from "react-redux";

import { useCreditsContext } from "./../../context";
import { Credits } from "./../../components";
import { getYearFromString, range } from "../../utils";

export default function CreditsContainer() {
  const [{ array, loading }] = useCreditsContext();
  const { userDataLoding } = useSelector((state) => state.userData);

  return (
    <Credits>
      {!loading &&
        array.map((item, index) => {
          return <CreditsItem key={item.id} item={item} index={index} />;
        })}
    </Credits>
  );
}

function CreditsItem({ item, index }) {
  const { userlists } = useSelector((state) => state.userData);
  const [ratingVisible, setRatingVisible] = useState(false);
  const [widgetVisible, setWidgetVisible] = useState(false);
  const [hoverIndex, setHoverIndex] = useState(0);
  const metaVisible = !!item.vote_count && !!item.vote_average;

  return (
    <Credits.Item>
      <Credits.Number>{index + 1}</Credits.Number>
      <Credits.Year>{getYearFromString(item.release_date)}</Credits.Year>
      <Credits.Title to={`/details/${item.type}/${item.id}`}>
        {item.title}
      </Credits.Title>
      {metaVisible && (
        <Credits.Meta>
          <Credits.Average value={item.vote_average}>
            {item.vote_average}
          </Credits.Average>
          <Credits.Amount>{item.vote_count}</Credits.Amount>
        </Credits.Meta>
      )}
      <Credits.Value value={item.value}>{item.value}</Credits.Value>
      <Credits.Wrapper>
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
